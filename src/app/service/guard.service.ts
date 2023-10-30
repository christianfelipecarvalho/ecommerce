import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AutenticacaoService } from '../autenticacao/autentiacao.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService {

  private is_logged:Subject<boolean | UrlTree> = new Subject();

  constructor(
    public auth_service:AutenticacaoService,
    public router: Router
  ) {}

   canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return this.is_logged;
   }

   isLogged(){
    let _token = sessionStorage.getItem('token');
      this.auth_service.verifyToken()
      .subscribe(
        (_res:any) =>{
          if(_res){
            this.is_logged.next(true);
          }else{
            this.goLogin();
          }
        }
      );

   }
   goLogin(){
    this.router.navigateByUrl('/login');
   }

}
