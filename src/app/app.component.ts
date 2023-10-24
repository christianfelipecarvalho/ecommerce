import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao/autentiacao.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  public is_logged:boolean = false;
  constructor(
    public auntenticacao_service:AutenticacaoService
  ){

    this.auntenticacao_service.verifyToken()
    .subscribe({
      next:() => {
        console.log('Token Verificado ...');
      },
      error:() => {
        console.log('Token Inválido ...');
      }
    });

  }
}
