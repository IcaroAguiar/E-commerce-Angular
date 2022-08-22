import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro-pag/cadastro-pag/cadastro-pag.component';
import { CadastroTabelaComponent } from './components/cadastro/cadastro-tabela/cadastro-tabela/cadastro-tabela.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete/cadastro-delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/cadastro', component: CadastroComponent },
  { path: 'login/cadastro/tabela', component: CadastroTabelaComponent },
  { path: 'login/cadastro/tabela/update/:id', component: CadastroUpdateComponent },
  { path: 'login/cadastro/tabela/delete/:id', component: CadastroDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
