import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [],
  templateUrl: './why-choose.html',
  styleUrl: './why-choose.css',
})
export class WhyChooseComponent {
  constructor(private title: Title) {
  this.title.setTitle('Why Choose Us | Nexinity');
}
}
