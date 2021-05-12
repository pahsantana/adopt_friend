import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


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
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { DataFormComponent } from './data-form/data-form.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './components/template/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';



export const rotas: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'pets', component: SearchPetsPageComponent },
  { path: 'cadastros', component: CadastrosComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: '**', component: NotFoundComponent },
]

const components = [
  AppComponent,
  NotFoundComponent,
  FooterComponent,
  HeaderComponent,
  SearchPetComponent
  
]

@NgModule({
  declarations: [
    ...components,
    HeaderHomeComponent,
    HomePageComponent,
    CardComponent,
    SearchPetsPageComponent,
    NgbdCarouselBasic,
    CadastrosComponent,
    DataFormComponent,
    QuemSomosComponent,
    ModalComponent
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(rotas),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    NgbModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
      
                
  ],
  exports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
