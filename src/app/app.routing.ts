import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
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
import { AdminComponent } from './layouts/admin/admin.component';
import { UserComponent } from './layouts/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NgbdModalComponent } from './components/modal/modal.component';
import { TeachingComponent } from './pages/teaching/teaching.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'login',           component: LoginComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'about',          component: AboutComponent },
    { path: 'founders',          component: FoundersComponent },
    { path: 'donate',          component: DonationComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'partner',          component: PartnerComponent },
    { path: 'events',      component: EventComponent },
    { path: 'testimonies',      component: TestimoniesComponent },
    { path: 'teachings',      component: TeachingComponent },
    { path: 'sermon',      component: SermonComponent },
    {path: 'modal', component: NgbdModalComponent },
    {
      path: 'admin',
      canActivate: [AuthGuard],
      component: AdminComponent,
      children: [ 
        {
          path: '',
          loadChildren: '../app/admin/admin/admin.module#AdminModule'
        }
      ]
    },
    {
      path: 'user',
      canActivate: [AuthGuard],
      component: UserComponent,
      children: [ 
        {
          path: '',
          loadChildren: '../app/user/user.module#UserModule'
        }
      ]
    },
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
