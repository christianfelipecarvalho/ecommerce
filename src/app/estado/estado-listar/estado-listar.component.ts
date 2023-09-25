import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.scss']
})
export class EstadoListarComponent implements OnInit {
  public dados: Array<any> = [];

constructor(
    public estado_service:EstadoService,
    public router: Router,
    private toastr:ToastrService
  ){}
  ngOnInit(): void {
    this.estado_service.listar()
      .on('value',(snapshot:any) => {
      // Limpa variavel local com os dados
      this.dados.splice(0,this.dados.length);
     // Dados retornados do Firebase
     let response = snapshot.val();

     // Não setar valores caso não venha
     // nenhum registro
     if (response == null) return;

     // Percorre a coleção de dados
     Object.values( response )
     .forEach(
       (e:any,i:number) => {
         // Adiciona os elementos no vetor
         // de dados
         this.dados.push({
           nomeEstado: e.nomeEstado,
           indice: Object.keys(snapshot.val())[i]
         });
       }
     );
   });
  }
excluir(key:string){
  this.estado_service.excluir(key);
  console.log( key );

  }

editar(key:string){
    this
    .router
    .navigate(['/estado/form/'+ key]);
  }
}
