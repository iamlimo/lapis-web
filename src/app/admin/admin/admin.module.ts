import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { PrayersComponent } from './prayers/prayers/prayers.component';
import { TestimoniesComponent } from './testimonies/testimonies/testimonies.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './users/user/user.component';
import { MessageComponent } from './message/message/message.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, 
    AddEventComponent, EventDetailComponent, EventListComponent, PrayersComponent, TestimoniesComponent, LoginComponent, UserComponent, MessageComponent, ResourceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
