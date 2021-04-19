import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutusComponent } from './dashboard/aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { GalleryComponent } from './dashboard/gallery/gallery.component';
import { TableComponent } from './dashboard/table/table.component';
import { FloorComponent } from './dashboard/floor/floor.component';
import { WallComponent } from './dashboard/wall/wall.component';
import { CeilComponent } from './dashboard/ceil/ceil.component';
import { FurnComponent } from './dashboard/furn/furn.component';
import { MirrorComponent } from './dashboard/mirror/mirror.component';
import { ContactComponent } from './dashboard/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    LoginComponent,
    GalleryComponent,
    TableComponent,
    FloorComponent,
    WallComponent,
    CeilComponent,
    FurnComponent,
    MirrorComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
