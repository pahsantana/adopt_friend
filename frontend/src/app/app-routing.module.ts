import { DataFormComponent } from './data-form/data-form.component';
import { AdocaoComponent } from './components/adocao/adocao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TermoResponsabilidadeComponent } from './components/termo-responsabilidade/termo-responsabilidade.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { SearchPetsPageComponent } from './components/search-pets-page/search-pets-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';


export const rotas: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'pets', component: SearchPetsPageComponent },
  { path: 'cadastros', component: CadastrosComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'termo-responsabilidade', component: TermoResponsabilidadeComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'adocao', component: AdocaoComponent },
  { path: '**', component: NotFoundComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
