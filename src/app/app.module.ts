import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-route.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
@NgModule({
  imports: [BrowserModule, RoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    SignInComponent,
    MenuBarComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
