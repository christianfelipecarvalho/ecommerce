import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from 'src/app/subcategoria/subcategoria.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  public indice:string    = '';
  public nome:string = '';
  public preco:number = 0;
  public descricao:string = '';
  public categoria:string = '';
  public subcategoria:string = '';
  public categorias:Array<any> = [];
  public subcategorias:Array<any> = [];
  public is_desabilidado:boolean = true;
  constructor(
    public categoria_service:CategoriaService,
    public subcategoria_service:SubcategoriaService,
    public activated_route:ActivatedRoute,
    public produto_service:ProdutoService,
    public router:Router
  ){
    this.listarCategoria();
    this.activated_route.params
    .subscribe(
      (params:any) => {
        // Caso seja um registro novo
        // interronper o método
        if (params.indice == undefined) return;
        this.produto_service.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any      = snapshot.val();
          this.indice       = params.indice;
          this.nome         = dado.nome;
          this.descricao    = dado.descricao;
          this.categoria    = dado.categoria;
          this.preco        = dado.preco;
          this.is_desabilidado = false;
          this.listarSubcategoria(dado.categoria);
          this.subcategoria = dado.subcategoria;
        });
      }
    );
  }

  salvar(){
    let dados = {
      descricao:this.descricao,
      nome:this.nome,
      categoria:this.categoria,
      preco:this.preco,
      subcategoria:this.subcategoria
    };

    if (dados.descricao == ''){
      document.querySelector('#descricao')
      ?.classList.add('has-error');
      return;
    }
    if (dados.nome == ''){
      document.querySelector('#nome')
      ?.classList.add('has-error');
      return;
    }

    if (this.indice == ''){
      this.produto_service.salvar(dados);
    }else{
      this.produto_service.editar(this.indice,dados);
    }
    this.router.navigate(['/produto/listar/']);
  }

  listarCategoria(){
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

  listarSubcategoria(_categoria:string){

    // Limpa a lista de subcategorias
    this.subcategorias.splice(0,this.subcategorias.length);

    this.subcategoria_service.listar()
    .on('value',(snapshot:any) => {

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {

          // Indice da subcategoria
          let _indice = Object.keys(snapshot.val())[i];

          // Adiciona os elementos no vetor
          // de dados
          if (_categoria == e.categoria){
            this.subcategorias.push({
              descricao: e.descricao,
              categoria: e.categoria,
              indice: _indice
            });
          }
        }
      );

      if (this.subcategorias.length > 0){
        this.is_desabilidado = false;
      }else{
        this.is_desabilidado = true;
      }

    });
  }
}
