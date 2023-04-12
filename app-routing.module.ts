import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './component/author/author.component';
import { AuthorCreaeditaComponent } from './component/author/author-creaedita/author-creaedita.component';
import { DamnificadoComponent } from './component/Damnificado/Damnificado.component';
import { DamnificadoCreaeditaComponent } from './component/Damnificado/damnificado-creaedita/damnificado-creaedita.component';



const routes: Routes = [
  {
    path:'authors',component:AuthorComponent,children:[
      {
        path:'nuevo',
        component:AuthorCreaeditaComponent
      }
    ]},
    {
    path:'Damnificados',component:DamnificadoComponent,children:[
      {
        path:'nuevo',component:DamnificadoCreaeditaComponent
      }
    ]
  }
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
