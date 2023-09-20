import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { FormaPagamentoService } from 'src/app/forma-pagamento/forma-pagamento.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { PedidoService } from '../pedido.service';

@Component({
	selector: 'app-pedido-form',
	templateUrl: './pedido-form.component.html',
	styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
	public clientes: Array<any> = [];
	public produtos: Array<any> = [];
	public pagamentos: Array<any> = [];
	public indice:string = '';
	public descricao: string = '';
	public cliente: string = '';
	public produto: string = '';
	public quantidade: string = '';
	public valor: string = '';
	public pagamento: string = '';

	constructor(
		public cliente_service: ClienteService,
		public produto_service: ProdutoService,
		public pagamento_service: FormaPagamentoService,
		public pedido_service: PedidoService,
		public activated_route: ActivatedRoute
	) {

		this.cliente_service.listar()
			.once('value', (snapshot: any) => {

				// Dados retornados do Firebase
				let response = snapshot.val();

				// Não setar valores caso não venha
				// nenhum registro
				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							// Adiciona os elementos no vetor
							// de dados
							this.clientes.push({
								nome: e.nome,
								indice: Object.keys(snapshot.val())[i]
							});
              console.log("Cliente => " + e.nome)
						}
					);
			});

		this.produto_service.listar()
			.once('value', (snapshot: any) => {

				// Dados retornados do Firebase
				let response = snapshot.val();

				// Não setar valores caso não venha
				// nenhum registro
				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							// Adiciona os elementos no vetor
							// de dados
							this.produtos.push({
								nome: e.nome,
								indice: Object.keys(snapshot.val())[i]
							});
              console.log("Produto => " + e.nome)
						}
					);
			});

		this.pagamento_service.listar()
			.once('value', (snapshot: any) => {

				// Dados retornados do Firebase
				let response = snapshot.val();

				// Não setar valores caso não venha
				// nenhum registro
				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							// Adiciona os elementos no vetor
							// de dados
							this.pagamentos.push({
								descricao: e.descricao,
								indice: Object.keys(snapshot.val())[i]
							});
              console.log("Pagamento => " + e.descricao)
						}
					);
			});

		this.activated_route.params
			.subscribe(
				(params: any) => {
          console.log("Passei aqui params" + params);
          console.log( params.indice );
					if (params.indice == undefined) return;
          console.log( params.indice );
					this.pedido_service.ref().child('/' + params.indice).on('value', (snapshot: any) => {
							let dado: any = snapshot.val();
              console.log( "dado active route =>" +dado.indice );
							this.indice = params.indice;
							this.descricao = dado.descricao;
							this.cliente = dado.cliente;
							this.produto = dado.produto;
							this.pagamento = dado.pagamento;
						})
				}
			);
	}

	salvarPedido() {
		let dados = {
			descricao: this.descricao,
			cliente: this.cliente,
			produto: this.produto,
			pagamento: this.pagamento
    };
    console.log("Indice" + dados.descricao);
    console.log("Descricao => " + dados.descricao);
    console.log("Cliente =>" + dados.cliente);
    console.log("Produto =>" + dados.produto);
    console.log("forma  =>" + dados.pagamento);


      if (this.descricao == '') {
        console.log("Entrei aqui"+ dados.descricao);
        document.querySelector('#descricao')
          ?.classList.add('has-error');
        return;

      }
     else {
      console.log("Entrei aqui 2");
			this.pedido_service.salvarPedido(dados);
      alert("SALvo com sucesso!")
			this.pedido_service.editar(this.indice, dados);
		}
	}
}
