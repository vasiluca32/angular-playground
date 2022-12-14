import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './components/nav/nav.module';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UiElementsComponent } from './components/ui-elements/ui-elements.component';
import { AccordionComponent } from './components/ui-elements/accordion/accordion.component';
import { HomeModule } from './components/home/home.module';
import { MyFormsModule } from './components/forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    NotFoundComponent,
    UiElementsComponent,
    AccordionComponent

  ],
  imports: [
    BrowserModule,
    NavModule,
    HomeModule,
    MyFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
