import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './component/author/author.component';
import { AuthorCreaeditaComponent } from './component/author/author-creaedita/author-creaedita.component';
import { DamnificadoComponent } from './component/Damnificado/Damnificado.component';
import { DamnificadoCreaeditaComponent } from './component/Damnificado/damnificado-creaedita/damnificado-creaedita.component';
import { cuentabancariaComponent } from './component/cuentabancaria/cuentabancaria.component';
import { cuentabancariaCreaeditaComponent } from './component/cuentabancaria/cuentabancaria-creaedita/cuentabancaria-creaedita.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';
import { UbicacionCreaeditaComponent } from './component/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { DonadorEditaComponent } from './component/donador/donador-edita/donador-edita.component';


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
    ]},
  {
    path:'cuentabancarias',component:cuentabancariaComponent,children:[
      {
        path:'nuevo',component:cuentabancariaCreaeditaComponent
      }
    ]},
   {    
     path:'Ubicaciones',component:UbicacionComponent,children:[
    {
      path:'nuevo',component:UbicacionCreaeditaComponent
    }
  ]
 }
  {
    path:'Donador',component:DonadorComponent,children:[
      {
        path:'nuevo',component:DonadorEditaComponent
      }
    ]
  }
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
