import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { ExamplesComponent } from './views/examples/examples.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { DocsComponent } from './views/docs/docs.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    ExamplesComponent,
    HeaderComponent,
    HomeComponent,
    DocsComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
