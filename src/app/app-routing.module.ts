import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { HomeComponent } from './home/home.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  {
    path:'categoria',
    component:CategoriaComponent,
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
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:SubcategoriaListarComponent},
      {path:'form', component:SubcategoriaFormComponent},
      {path:'form/:indice', component:SubcategoriaFormComponent}
    ]
  },
  {path:'forma-pagamento', component:FormaPagamentoComponent,
children:[
  {path:'', redirectTo: 'listar', pathMatch:'full'},
  {path:'listar',component:FormaPagamentoListarComponent},
  {path:'form',component:FormaPagamentoFormComponent},
  {path:'form/:indice',component:FormaPagamentoFormComponent}
]},
{
  path:'produto',
  component:ProdutoComponent,
  children:[
    {path:'' , redirectTo:'listar', pathMatch:'full'},
    {path:'listar', component:ProdutoListarComponent},
    {path:'form', component:ProdutoFormComponent},
    {path:'form/:indice', component:ProdutoFormComponent}
  ]
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
