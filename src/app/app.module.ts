import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { SuperSaiyanTwoComponent } from './super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './super-saiyan-four/super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
  	FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
