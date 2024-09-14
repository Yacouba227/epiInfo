import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  countrycode:string="227";
  whatsappnumber:string="98606077";
  url:string="https://wa.me/"+this.countrycode+this.whatsappnumber+"?text=Bonjour! comment puis-je vous aider?";
  essaie:string="https://www.facebook.com/share/q9SptmQ6Lvzsanku/?mibextid=qi2Omg";
  ytube:string="https://www.youtube.com";
  sweb:string="https://www.epiniger.edu.ne/";
  local:string="https://www.google.com/maps/place/EPI+Niger,+L'Ecole+Priv%C3%A9e+d'Ing%C3%A9nierie+du+Niger/@13.5318864,2.1024797,814m/data=!3m2!1e3!4b1!4m6!3m5!1s0x11d0754a14323b47:0x67409acc1f19285b!8m2!3d13.5318864!4d2.1050546!16s%2Fg%2F11sycs3013?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D";
  constructor() { }

  ngOnInit() {
  }

}
