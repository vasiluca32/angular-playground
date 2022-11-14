import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './components/nav/nav.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UiElementsComponent } from './components/ui-elements/ui-elements.component';
import { AccordionComponent } from './components/ui-elements/accordion/accordion.component';
import { HomeModule } from './components/home/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    WidgetsComponent,
    NotFoundComponent,
    UiElementsComponent,
    AccordionComponent,

  ],
  imports: [
    BrowserModule,
    NavModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
