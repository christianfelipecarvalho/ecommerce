import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from '../subcategoria.service';

@Component({
  selector: 'app-subcategoria-form',
  templateUrl: './subcategoria-form.component.html',
  styleUrls: ['./subcategoria-form.component.scss']
})
export class SubcategoriaFormComponent {
  public categorias:Array<any>  = [];
  public indice:string          = '';
  public descricao:string       = '';
  public categoria:string       = '';
  constructor(
    public categoria_service:CategoriaService,
    public subcategoria_service:SubcategoriaService,
    public router:Router,
    public activated_route:ActivatedRoute
  ){

    this.activated_route.params
    .subscribe(
      (params:any) => {
        // verifica se tem algo pra buscar se não não executa
        if(params.indice == undefined)return;
        console.log( params.indice );
        this.subcategoria_service.ref()
        .child('/'+ params.indice)
        .on('value',(snapshot:any) => {
          let dado:any   = snapshot.val();
          this.categoria = dado.categoria;
          this.indice = params.indice;
          this.descricao = dado.descricao;
        })
      }
    )


    this.categoria_service.listar()
    .once('value',(snapshot:any) => {

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.categorias.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );


    });
  }



  salvarSubcategoria(){
    console.log(this.categoria);
    let dados = {
      descricao:this.descricao,
      categoria:this.categoria
    };
    if (dados.descricao == ''){
      document.querySelector('#descricao')
      ?.classList.add('has-error');
      return;
    }
    if (this.indice == ''){
      this.subcategoria_service.salvarSubcategoria(dados);
    }else{
      this.subcategoria_service.editarSubCategoria(this.indice,dados);
    }
    alert("Salvo com sucesso!");
    this.router.navigate(['/subcategoria/listar/']);
  }
}
