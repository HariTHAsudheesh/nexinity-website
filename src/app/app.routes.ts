import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { WhyChooseComponent } from './components/why-choose/why-choose';
import { ServicesComponent } from './components/services/services';
import { ContactComponent } from './components/contact/contact';
import { CctvComponent } from './components/cctv/cctv';
import { ComputerServiceComponent } from './components/computer-service/computer-service';
import { WebDesignComponent } from './components/web-design/web-design';
import { BrandingComponent } from './components/branding/branding';
import { GraphicDesignComponent } from './components/graphic-design/graphic-design';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why-choose', component: WhyChooseComponent },
  { path: 'services', component: ServicesComponent },
   { path: 'services/cctv', component: CctvComponent },
  { path: 'services/computer-service', component: ComputerServiceComponent },
  { path: 'services/web-design', component: WebDesignComponent },
  { path: 'services/branding', component: BrandingComponent },
  { path: 'services/graphic-design', component: GraphicDesignComponent },
  { path: 'services/digital-marketing', component: DigitalMarketingComponent },

  { path: 'contact', component: ContactComponent }
];
