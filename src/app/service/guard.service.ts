import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AutenticacaoService } from '../autenticacao/autentiacao.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService {

  public is_logged:Subject<boolean | UrlTree> = new Subject();

  constructor(
    public auth_service:AutenticacaoService,
    public router: Router
  ) {}

  canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
    let _token = sessionStorage.getItem('token');
    if (_token == '' || _token == null || _token == undefined){
      this.goLogin();
    }
    return this.is_logged;
  }

  isLogged(){
    this.auth_service.verifyToken()
    .subscribe(
      {
        next: (_res:any) => {
          if (_res){
            this.is_logged.next(true);
          }
        },
        error: () => {
          this.goError();
        }
      }
    );
  }

  goLogin(){
    this.is_logged.next(false);
    this.router.navigateByUrl('/login');
  }

  goError(){
    /*
      Lógica para enviar o usuário para uma página de erro
      Semelhante a página de login. Método goLogin()
    */
  }
}
