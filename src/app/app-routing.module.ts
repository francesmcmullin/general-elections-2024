import { PartyPageComponent } from './party-page/party-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:name', component: EventDetailsComponent },
  { path: 'app-party-page', component: PartyPageComponent },
  { path: '', redirectTo: '/events', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
