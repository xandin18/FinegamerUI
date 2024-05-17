import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "cadastro-produto", component: CadastroProdutosComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "sobre-nos", component: SobreComponent},
  {path: "produto/:name", component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
