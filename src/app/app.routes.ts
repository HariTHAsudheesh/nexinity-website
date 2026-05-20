import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { WhyChooseComponent } from './components/why-choose/why-choose';
import { ServicesComponent } from './components/services/services';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why-choose', component: WhyChooseComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent }
];
