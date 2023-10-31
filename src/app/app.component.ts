import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from './autenticacao/autentiacao.service';
import { GuardService } from './service/guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';

  public is_logged:boolean = false;
  constructor(
    public autenticacao_service:AutenticacaoService,
    public router:Router,
    public guard_service:GuardService
  ){
    guard_service.isLogged();

    this.guard_service.is_logged
    .subscribe(
      (_islogged:any) => {
        this.is_logged = _islogged ? true : false;
      }
    );
  }
}
