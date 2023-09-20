import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent {
  public estados:Array<any>   = [];
  public indice:string        = '';
  public nomeFantasia:string  = '';
  public logadouro:string     = '';
  public razaoSocial:string   = '';
  public complemento:string   = '';
  public cnpj:string          = '';
  public bairro:string        = '';
  public contato:string       = '';
  public cidade:string        = '';
  public email:string         = '';
  public estado:string        = '';
  constructor(
    public estado_service:EstadoService,
    public fornecedor_service:FornecedorService,
    public router:Router,
    public activated_route:ActivatedRoute
  ){
    this.activated_route.params
    .subscribe(
      (params:any) => {
        // verifica se tem algo pra buscar se não não executa
        if(params.indice == undefined)return;
        console.log( params.indice );
        this.fornecedor_service.ref()
        .child('/'+ params.indice)
        .on('value',(snapshot:any) => {
          let dado:any       = snapshot.val();
          this.estado        = dado.estado;
          this.indice        = params.indice;
          this.nomeFantasia  = dado.nomeFantasia;
          this.logadouro     = dado.logadouro;
          this.razaoSocial   = dado.razaoSocial;
          this.complemento   = dado.complemento;
          this.cnpj          = dado.cnpj;
          this.bairro        = dado.bairro;
          this.contato       = dado.contato;
          this.cidade        = dado.cidade;
          this.email         = dado.email;

        })
      }
    )
    this.estado_service.listar()
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
          this.estados.push({
            nomeEstado: e.nomeEstado,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }


  salvarFornecedor(){
    let dados = {
      nomeFantasia:this.nomeFantasia,
      estado:this.estado,
      logadouro:this.logadouro,
      razaoSocial:this.razaoSocial,
      complemento:this.complemento,
      cnpj:this.cnpj,
      bairro:this.bairro,
      contato:this.contato,
      cidade:this.cidade,
      email:this.email

    };
    if (this.indice == ''){
    let isValid = true;
    if (dados.nomeFantasia == '' ){
      document.querySelector('#nomeFantasia')
      ?.classList.add('has-error');
      return;
    }
    if (dados.bairro === '') {
      document.querySelector('#bairro')?.classList.add('has-error');
      isValid = false; // Define a flag para falso se o campo nome for nulo
    }
    if (dados.cnpj === '') {
      document.querySelector('#cnpj')?.classList.add('has-error');
      isValid = false; // Define a flag para falso se o campo nome for nulo
    }
    if (dados.cidade === '') {
      document.querySelector('#cidade')?.classList.add('has-error');
      isValid = false; // Define a flag para falso se o campo nome for nulo
    }
    if (dados.email === '') {
      document.querySelector('#email')?.classList.add('has-error');
      isValid = false; // Define a flag para falso se o campo nome for nulo
    }
    if (dados.email === '' || dados.cidade === '' || dados.cnpj === '' || dados.bairro === '' || dados.nomeFantasia == '') {
      isValid = false;
      return;
    }
      this.fornecedor_service.salvarFornecedor(dados);
    }else{
      this.fornecedor_service.editarFornecedor(this.indice,dados);
    }
    alert("Salvo com sucesso!");
    this.router.navigate(['/fornecedor/listar/']);
  }
}
