import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';

import {NotesListComponent} from './notes-list/notes-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {environment as env} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(env.fireBase),
    BrowserAnimationsModule, // <-- add core module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
