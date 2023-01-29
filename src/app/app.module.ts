import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/HomeComponent/home.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent, BlogItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
