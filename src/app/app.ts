import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home} from './components/home/home';
import { Services } from "./components/services/services";
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Home,About,Services,Contact,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}