import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from './autentiacao.service';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoComponent implements OnInit {
  public email:string = '';
  public senha:string = '';

  constructor(
    public autenticacao_service:AutenticacaoService,
    public router:Router
  ){}

  ngOnInit(): void {
  }
  entrar(){
    this.autenticacao_service.logar(this.email,this.senha)
    .subscribe({
      next: (_res:any) => {
        sessionStorage.setItem('token',_res.token);
        this.autenticacao_service.logon();
      },
      error: () => {
        console.log('Erro ...');
      }
    })
  }
}
