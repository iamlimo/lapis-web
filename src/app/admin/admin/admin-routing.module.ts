import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { PrayersComponent } from './prayers/prayers/prayers.component';
import { TestimoniesComponent } from './testimonies/testimonies/testimonies.component';
import { MessageComponent } from './message/message/message.component';
import { UserComponent } from './users/user/user.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { TeachingComponent } from './teachings/teaching/teaching.component';


const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'event', component: EventListComponent},
  {path: 'prayer', component:  PrayersComponent},
  {path: 'testimony', component:   TestimoniesComponent},
  // {path: 'users', component:   TestimoniesComponent},
  {path: 'message', component: MessageComponent},
  {path: 'user', component: UserComponent},
  {path: 'resources', component: ResourceComponent},
  {path: 'teaching', component: TeachingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
