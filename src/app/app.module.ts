import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './services/event.service';

import { EventDetailsComponent } from './event-details/event-details.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { ScoreKeyComponent } from './score-key/score-key.component';
import { PartyPageComponent } from './party-page/party-page.component';
import { FilterArrayPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    ScorecardComponent,
    ScoreKeyComponent,
    PartyPageComponent,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
