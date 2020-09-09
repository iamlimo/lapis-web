import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { FoundersComponent } from './founders/founders.component';
import { ContactComponent } from './contact/contact.component';
import { PartnerComponent } from './partner/partner.component';
import { AboutComponent } from './about/about.component';
import { DonationComponent } from './donation/donation.component';
import { EventComponent } from './event/event.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { SermonComponent } from './sermon/sermon.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        FoundersComponent,
        ContactComponent,
        PartnerComponent,
        AboutComponent,
        DonationComponent,
        EventComponent,
        TestimoniesComponent,
        SermonComponent,
        LoginComponent
    ]
})
export class ExamplesModule { }
