import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { TermoResponsabilidadeComponent } from './components/termo-responsabilidade/termo-responsabilidade.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { SearchPetComponent } from './components/template/search-pet/search-pet.component';
import { HeaderHomeComponent } from './components/template/header-home/header-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardComponent } from './components/template/card/card.component';
import { SearchPetsPageComponent } from './components/search-pets-page/search-pets-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatMenuModule } from '@angular/material/menu';
import { NgbdCarouselBasic } from './components/template/carousel-basic/carousel-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './components/login/login.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { DataFormComponent } from './data-form/data-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AdocaoComponent } from './components/adocao/adocao.component';

import { ModalComponent } from './components/template/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { MeusDadosComponent } from './components/meus-dados/meus-dados.component';

import { MatSelectModule } from '@angular/material/select';
import { UpdatePetComponent } from './components/update-pet/update-pet.component';


const components = [
  AppComponent,
  NotFoundComponent,
  FooterComponent,
  HeaderComponent,
  SearchPetComponent,
  HeaderHomeComponent,
  HomePageComponent,
  CardComponent,
  SearchPetsPageComponent,
  NgbdCarouselBasic,
  CadastrosComponent,
  DataFormComponent,
  QuemSomosComponent,
  TermoResponsabilidadeComponent,
  LoginComponent,
  AdocaoComponent,
  ModalComponent
]

@NgModule({
  declarations: [
    ...components,
    EnderecoComponent,
    MeusDadosComponent,
    UpdatePetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ModalModule,
    MatSelectModule

  ],
  exports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
