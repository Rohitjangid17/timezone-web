import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  msg: any;

  constructor(private http: HttpClient) { }

  onSubmit(contactForm: { message: string; name: string; email: string; subject: string }) {
    this.http.post('https://time-zone-6527b-default-rtdb.firebaseio.com/posts.json', contactForm).subscribe(res => {
      console.log(res)
    })
  }
}
