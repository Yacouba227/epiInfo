import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  countrycode:string="227";
  whatsappnumber:string="80577015";
  url:string="https://wa.me/"+this.countrycode+this.whatsappnumber+"?text=ça a marcher";
  essaie:string="https://www.linkedin.com/feed/";
  ytube:string="https://www.youtube.com/@wewantcode570";
  sweb:string="https://www.epiniger.edu.ne/";
  constructor() { }

  ngOnInit() {
  }

}
