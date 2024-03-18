import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductModule } from './features';

@NgModule({
  imports: [BrowserModule, ProductModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
