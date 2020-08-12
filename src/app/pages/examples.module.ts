import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
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
        SermonComponent
    ]
})
export class ExamplesModule { }
