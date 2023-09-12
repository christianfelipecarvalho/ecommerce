import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor(
    public firebase_service:FirebaseService
  ) { }

  ref(){
    return this.firebase_service
    .ref()
    .child('/subcategoria');
  }

  salvarSubcategoria(dados:any){
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

  editarSubCategoria(indice:string,dados:any){
    this.ref().child('/' + indice)
    .update(dados)
    .then();
  }
}
