import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../../material/material.module';
import { PageContentComponent } from './page-content/page-content.component';
import { HeroComponent } from './hero/hero.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { RouterModule } from '@angular/router';

 const components:any=[
  PageContentComponent,
  HeaderComponent,
  FooterComponent,
  HeroComponent,
  NavListComponent,

 ]


@NgModule({
  declarations: [
    ...components,
    
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[...components]
})
export class LandingModule { }
