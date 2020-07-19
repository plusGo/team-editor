import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TeamEditorModule} from '../../projects/team-editor/src/lib/team-editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TeamEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
