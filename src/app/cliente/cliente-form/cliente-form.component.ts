import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  public indice:string = '';
  public nome:string = '';
  public cpf:string = '';
  public dataNascimento:string = '';
  public celular:string = '';
  public email:string = '';
  constructor(
    public cliente_service:ClienteService,
    public activated_route:ActivatedRoute,
    public router:Router
  ){
    this.activated_route.params
    .subscribe(
      (params:any) => {
        // verifica se tem algo pra buscar se não não executa
        if(params.indice == undefined)return;
        console.log( params.indice );
        this.cliente_service.ref()
        .child('/'+ params.indice)
        .on('value',(snapshot:any) => {
          let dado:any        = snapshot.val();
          this.indice         = params.indice;
          this.nome           = dado.nome;
          this.email          = dado.email;
          this.cpf            = dado.cpf;
          this.celular        = dado.celular;
          this.dataNascimento = dado.dataNascimento
        })
      }
    )
  }
  salvarCliente(){
    let dados = {
      nome:this.nome,
      cpf:this.cpf,
      email:this.email,
      celular:this.celular,
      dataNascimento: this.dataNascimento
    };

    if (this.indice === '') {
      let isValid = true; // Flag para rastrear se todos os campos são válidos

      if (dados.nome === '') {
        document.querySelector('#nome')?.classList.add('has-error');
        isValid = false; // Define a flag para falso se o campo nome for nulo
      }

      if (dados.cpf === '') {
        document.querySelector('#cpf')?.classList.add('has-error');
        isValid = false; // Define a flag para falso se o campo cpf for nulo
      }

      if (dados.email === '') {
        document.querySelector('#email')?.classList.add('has-error');
        isValid = false; // Define a flag para falso se o campo email for nulo
      }

      if (dados.dataNascimento === '') {
        document.querySelector('#dataNascimento')?.classList.add('has-error');
        isValid = false; // Define a flag para falso se o campo dataNascimento for nulo
      }

      if (!isValid) {
        // Se algum campo for nulo, não continue com o salvamento
        return;
      }

      this.cliente_service.salvar(dados);
    }else{
      this.cliente_service.editar(this.indice,dados);
    }
    this.router.navigate(['/cliente/listar/']);
  }

}


