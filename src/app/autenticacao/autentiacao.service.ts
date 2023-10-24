import { Injectable } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  public is_logged:boolean = false;
  constructor(
    public requisicao_service:RequisicaoService
  ) {}

  logar(usuario:string,senha:string){
    return this.requisicao_service.post({
      email:usuario,
      senha:senha
    },'/auth');
  }

  logon(){
    this.is_logged = true;
  }

  verifyToken(){
    return this.requisicao_service
    .get('/auth/verifytoken',{
      token:sessionStorage.getItem('token')
    });
  }
}
