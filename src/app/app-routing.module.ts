import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Components/list/list.component';
import { NewComponent } from './Components/new/new.component';
import { EditComponent } from './Components/edit/edit.component';
import { AppComponent } from './app.component';
import { ShowComponent } from './Components/show/show.component';

const routes: Routes = [
  // old routing
  // {path:'',component:AppComponent},

  {path:'',component:ListComponent},
  {path:'new',component:NewComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'show/:id',component:ShowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
