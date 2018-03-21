import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';



const routes: Routes = [

  { path: '', redirectTo: '/jumbotron', pathMatch: 'full' },
  { path: 'jumbotron', component: JumbotronComponent },
  { path: 'contato', component: ContatoComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }