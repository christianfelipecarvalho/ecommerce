import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { EstadoComponent } from './estado/estado.component';
import { FooterComponent } from './footer/footer.component';
import { FormaPagamentoFormComponent } from './forma-pagamento/forma-pagamento-form/forma-pagamento-form.component';
import { FormaPagamentoListarComponent } from './forma-pagamento/forma-pagamento-listar/forma-pagamento-listar.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { PedidoListarComponent } from './pedido/pedido-listar/pedido-listar.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent,
    FormaPagamentoComponent,
    FormaPagamentoListarComponent,
    FormaPagamentoFormComponent,
    SubcategoriaComponent,
    SubcategoriaListarComponent,
    SubcategoriaFormComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    ProdutoListarComponent,
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    PedidoComponent,
    PedidoFormComponent,
    PedidoListarComponent,
    EstadoComponent,
    EstadoFormComponent,
    EstadoListarComponent,
    FornecedorComponent,
    FornecedorFormComponent,
    FornecedorListarComponent,
    UsuarioListarComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    UsuarioListarComponent,
    AutenticacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCQMqYqbGs1rJUIEA6qZZXSK-Iawi3D3_0",
      authDomain: "ecommerce-cfe32.firebaseapp.com",
      projectId: "ecommerce-cfe32",
      storageBucket: "ecommerce-cfe32.appspot.com",
      messagingSenderId: "988234780211",
      appId: "1:988234780211:web:17d112e61cb56b92921d46",
      measurementId: "G-N40NE4GSD7"
    }),
    AngularFireStorageModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
