import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.scss']
})
export class FornecedorListarComponent {
  public dados:Array<any> = [];
  constructor(
    public fornecedor_service:FornecedorService,
    public estado_service:EstadoService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.fornecedor_service.listar()
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
        async (e:any,i:number) => {

          let fornecedor_nomeFantasia:any = await this.fornecedor_service.get(e.nomeFantasia);

          this.dados.push({
            nomeFantasia: e.nomeFantasia,
            cnpj:e.cnpj,

            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  excluir(key:string){
    this.fornecedor_service.excluir(key);
  }

  editarSubCategoria(key:string){
    this
    .router
    .navigate(['/fornecedor/form/' + key]);
  }
}
