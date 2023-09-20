import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(
    public firebase_service:FirebaseService
  ) { }

  ref(){
    return this.firebase_service
    .ref()
    .child('/fornecedor');
  }

  salvarFornecedor(dados:any){
    this.ref().push(dados).then();
  }

  listar(){
    return this.ref();
  }

  excluir(indice:string){
    this
    .ref()
    .child('/' + indice)
    .remove()
    .then();
  }

  editarFornecedor(indice:string,dados:any){
    this.ref().child('/' + indice)
    .update(dados)
    .then();
  }

  async get(indice:string){
    let dado:any;
    await this.ref().orderByKey()
    .equalTo(indice)
    .once('value')
    .then( function(snapshot) {
      if (snapshot.exists()) {
          dado = Object.values(snapshot.val())[0];
      }
    });

  }
}
