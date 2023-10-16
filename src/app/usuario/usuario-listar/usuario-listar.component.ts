import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent {
    public dados: Array<any> = [];
	constructor(
		public usuario_service: UsuarioService,
		public router: Router
	) {
		this.ngOnInit();
	 }

	ngOnInit(): void {
		this.listar();
	}

	excluir(_id:number){
		return this.usuario_service.excluir(_id)
		.subscribe(
			() => {
				this.listar();
			}
		);
	}

	listar(){
		this.usuario_service.listar()
		.subscribe(
			(_dados:any) => {
				this.dados = _dados;
				console.log(_dados);
			}
		);
	}

	editar(key: string) {
		this
			.router
			.navigate(['/usuario/form/' + key]);
	}
}
