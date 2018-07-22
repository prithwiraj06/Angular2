import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader } from './AppHeader/app.headercomponent';
import { AppFooterComponent } from './AppFooter/app.footercomponent';


import {RouterModule,Routes} from '@angular/router';


const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotFoundComponent}
];
import { HomeComponent } from './HomeComponent/app.homecomponent';
import { AboutComponent } from './AboutComponent/app.aboutcomponent';
import { ContactComponent } from './ContactComponent/app.contactcomponent';
import { PagenotFoundComponent } from './NotfoundComponent/app.notfoundcomponent';

@NgModule({
  declarations: [
    AppComponent,AppHeader,AppFooterComponent,HomeComponent,AboutComponent,ContactComponent,PagenotFoundComponent
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot (appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
