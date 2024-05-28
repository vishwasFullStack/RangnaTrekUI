import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { EventlistComponent } from './eventlist/eventlist.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    SearchComponent,
    MenubarComponent,    
    EventlistComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
