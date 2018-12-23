import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiceComponent } from 
'./components/dice/dice.component';
import { MainComponent } from 
'./components/main/main.component';
import { Page1Component } from './components/create/page1/page1.component';
import { Page2Component } from './components/create/page2/page2.component';
import { Page3Component } from './components/create/page3/page3.component';
import { Page4Component } from './components/create/page4/page4.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', 						component: MainComponent},
  { path: 'create', 	component: Page1Component,
    children:[
      {path:'add/:id',component: Page2Component }
    ]
  },
  { path: 'page3', 	component: Page3Component },
  { path: 'page4', 	component: Page4Component },
  { path: 'dice', 	component: DiceComponent },
  { path: 'view',   component: ViewComponent },
];

@NgModule({
	
	
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
