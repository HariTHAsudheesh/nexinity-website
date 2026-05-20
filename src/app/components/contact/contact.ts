import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

  name = '';
  phone = '';
  email = '';
  service = ''; 
  message = '';

  sendToWhatsApp() {
    const text =
`Hello Nexinity,

Name: ${this.name}
Phone: ${this.phone}
Email: ${this.email}

Message:
${this.message}`;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/918943058165?text=${encodedText}`,
      '_blank'
    );
  }
  constructor(private title: Title) {
  this.title.setTitle('Contact Us | Nexinity');
}
}