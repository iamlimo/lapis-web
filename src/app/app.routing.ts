import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AboutComponent } from './pages/about/about.component';
import { FoundersComponent } from './pages/founders/founders.component';
import { DonationComponent } from './pages/donation/donation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { EventComponent } from './pages/event/event.component';
import { TestimoniesComponent } from './pages/testimonies/testimonies.component';
import { SermonComponent } from './pages/sermon/sermon.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'about',          component: AboutComponent },
    { path: 'founders',          component: FoundersComponent },
    { path: 'donate',          component: DonationComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'partner',          component: PartnerComponent },
    { path: 'events',      component: EventComponent },
    { path: 'testimonies',      component: TestimoniesComponent },
    { path: 'sermon',      component: SermonComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
