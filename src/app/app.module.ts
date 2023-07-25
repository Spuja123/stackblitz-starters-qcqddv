import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-route.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
@NgModule({
  imports: [BrowserModule, RoutingModule, FormsModule],
  declarations: [AppComponent, SignInComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
