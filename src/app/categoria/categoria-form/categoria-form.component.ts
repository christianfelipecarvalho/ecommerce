import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent {
  exibirMensagemSucesso = false;
  public indice:string    = '';
  public descricao:string = '';
  constructor(
      public categoria_service:CategoriaService,
      public activated_route:ActivatedRoute
  ){

    this.activated_route.params
    .subscribe(
      (params:any) => {
        // verifica se tem algo pra buscar se não não executa
        if(params.indice == undefined)return;
        console.log( params.indice );
        this.categoria_service.ref()
        .child('/'+ params.indice)
        .on('value',(snapshot:any) => {
          let dado:any   = snapshot.val();
          this.indice    = params.indice;
          this.descricao = dado.descricao;
        })
      }
    )
  }

  salvar(){
    let dados = {
      descricao:this.descricao
    };
    if (this.indice == ''){
      this.categoria_service.salvar(dados);
    }else{
      this.categoria_service.editar(this.indice,dados);
    }
    //this.descricao = '';
  }
  exibirMensagem() {
    this.exibirMensagemSucesso = true;
    setTimeout(() => {
      this.exibirMensagemSucesso = false;
    }, 3000); // Exibe a mensagem por 3 segundos
  }
}
