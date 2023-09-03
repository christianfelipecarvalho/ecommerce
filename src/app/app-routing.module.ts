import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'categoria',component:CategoriaComponent,
  children:[
    {path:'', redirectTo:'listar',pathMatch:'full'},
    {path:'listar', component:CategoriaListarComponent},
    {path:'form',component:CategoriaFormComponent},
    {path:'form/:indice',component:CategoriaFormComponent}

  ]
},
{path:'forma-pagamento', component:FormaPagamentoComponent,
children:[
  {path:'', redirectTo: 'listar', pathMatch:'full'},
  {path:'listar',component:FormaPagamentoListarComponent},
  {path:'form',component:FormaPagamentoFormComponent},
  {path:'form/:indice',component:FormaPagamentoFormComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
