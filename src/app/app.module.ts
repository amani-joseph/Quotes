import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { VotesComponent } from './components/votes/votes.component';
import { TimeStampComponent } from './components/time-stamp/time-stamp.component';

@NgModule({
  declarations: [AppComponent, QuotesComponent, VotesComponent, TimeStampComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
