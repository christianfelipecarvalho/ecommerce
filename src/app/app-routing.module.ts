import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { EstadoComponent } from './estado/estado.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { HomeComponent } from './home/home.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { PedidoListarComponent } from './pedido/pedido-listar/pedido-listar.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { GuardService } from './service/guard.service';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate:[GuardService]},
    { path: 'home', component: HomeComponent,
        canActivate:[GuardService]
    },
  {
    path:'categoria',
    component:CategoriaComponent,
    canActivate:[GuardService],
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:CategoriaListarComponent},
      {path:'form', component:CategoriaFormComponent},
      {path:'form/:indice', component:CategoriaFormComponent}
    ]
  },
  {
    path:'subcategoria',
    component:SubcategoriaComponent,
    canActivate:[GuardService],
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:SubcategoriaListarComponent},
      {path:'form', component:SubcategoriaFormComponent},
      {path:'form/:indice', component:SubcategoriaFormComponent}
    ]
  },
  {path:'forma-pagamento', component:FormaPagamentoComponent,
  canActivate:[GuardService],
  children:[
  {path:'', redirectTo: 'listar', pathMatch:'full'},
  {path:'listar',component:FormaPagamentoListarComponent},
  {path:'form',component:FormaPagamentoFormComponent},
  {path:'form/:indice',component:FormaPagamentoFormComponent}
]},
{
  path:'produto',
  component:ProdutoComponent,
  canActivate:[GuardService],
  children:[
    {path:'' , redirectTo:'listar', pathMatch:'full'},
    {path:'listar', component:ProdutoListarComponent},
    {path:'form', component:ProdutoFormComponent},
    {path:'form/:indice', component:ProdutoFormComponent}
  ]
},
{
  path:'cliente',
  component:ProdutoComponent,
  canActivate:[GuardService],
  children:[
    {path:'' , redirectTo:'listar', pathMatch:'full'},
    {path:'listar', component:ClienteListarComponent},
    {path:'form', component:ClienteFormComponent},
    {path:'form/:indice', component:ClienteFormComponent}
  ]
},
{
  path: 'pedido', component: PedidoComponent,
  canActivate:[GuardService],
  children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: PedidoListarComponent },
      { path: 'form', component: PedidoFormComponent },
      { path: 'form/:indice', component: PedidoFormComponent }
  ]
},
{
  path: 'estado', component: EstadoComponent,
  canActivate:[GuardService],
  children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: EstadoListarComponent },
      { path: 'form', component: EstadoFormComponent },
      { path: 'form/:indice', component: EstadoFormComponent }
  ]
},
{
  path: 'usuario', component: UsuarioComponent,
  canActivate:[GuardService],
  children: [
    {path: '',redirectTo: 'listar',pathMatch: 'full' },
    {path: 'listar',component: UsuarioListarComponent },
    {path: 'form',component: UsuarioFormComponent },
    {path: 'form/:id',component: UsuarioFormComponent,}
  ]
},
{
  path: 'fornecedor', component: FornecedorComponent,
  canActivate:[GuardService],
  children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: FornecedorListarComponent },
      { path: 'form', component: FornecedorFormComponent },
      { path: 'form/:indice', component: FornecedorFormComponent }
  ]
},
{
  path:'login',component:AutenticacaoComponent
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
