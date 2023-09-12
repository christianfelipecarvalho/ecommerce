import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.scss']
})
export class ProdutoListarComponent {
  public dados:Array<any> = [];
  constructor(
    public categoria_service:CategoriaService,
    public produto_service: ProdutoService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.categoria_service.listar()
    .on('value',(snapshot:any) => {

      // Limpa variavel local com os dados
      this.dados.splice(0,this.dados.length);

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      // Percorre a coleção de dados
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.dados.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  excluir(key:string){
    this.categoria_service.excluir(key);
  }

  editar(key:string){
    this
    .router
    .navigate(['/produto/form/' + key]);
  }
}
