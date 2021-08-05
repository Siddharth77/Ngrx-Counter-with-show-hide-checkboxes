import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
// import { CheckboxModule } from 'primeng/checkbox';
import { counterReducer } from './counter.reducer'; // to be removed
// import { columnConfigurationReducer } from './counter.reducer'; // to be added

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ShowSectionComponent } from './show-section/show-section.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer })
    // CheckboxModule
  ],
  declarations: [AppComponent, MyCounterComponent, ShowSectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
