import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UiElementsComponent } from './components/ui-elements/ui-elements.component';
import { AccordionComponent } from './components/ui-elements/accordion/accordion.component';
import { WidgetsComponent } from './components/widgets/widgets.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'widgets',
    component: WidgetsComponent
  },
  {
    path: 'ui-elements',
    component: UiElementsComponent,
    children: [
      {
        path: 'accordion',
        component: AccordionComponent
      }
    ]
  },
  {
    path: 'accordion',
    component: AccordionComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
