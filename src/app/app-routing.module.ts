import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutusComponent } from './dashboard/aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './dashboard/gallery/gallery.component';
import { TableComponent } from './dashboard/table/table.component';
import { FloorComponent } from './dashboard/floor/floor.component';
import { WallComponent } from './dashboard/wall/wall.component';
import { CeilComponent } from './dashboard/ceil/ceil.component';
import { FurnComponent } from './dashboard/furn/furn.component';
import { MirrorComponent } from './dashboard/mirror/mirror.component';
import { ContactComponent } from './dashboard/contact/contact.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,
children:[
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"table",component:TableComponent},
  {path:"floor",component:FloorComponent},
  {path:"wall",component:WallComponent},
  {path:"ceil",component:CeilComponent},
  {path:"furn",component:FurnComponent},
  {path:"mirror",component:MirrorComponent},
  {path:"contact",component:ContactComponent},

]
},
{path:"register",component:RegisterComponent},
{path:"login" ,component:LoginComponent},
{path:"dashboard" ,component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
