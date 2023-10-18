import { Component, Input } from '@angular/core';
import { Info } from '../info-list/info-list.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @Input()
  public contentOnly: boolean = false;

  public infos: Info[] = [
    {
      icon: "email", 
      name: "Email", 
      value: "mathias.ewald@googlemail.com", 
      valueLink: "mailto:mathias.ewald@googlemail.com"
    }, 
    {
      icon: "language", 
      name: "LinkedIn", 
      value: "mathias-ewald", 
      valueLink: "https://www.linkedin.com/in/mathias-ewald/" 
    },
    {
      icon: "code", 
      name: "GitHub", 
      value: "mathias-ewald", 
      valueLink: "https://github.com/mathias-ewald" 
    },
    {
      icon: "call", 
      name: "Address", 
      value: "+43 664 2811113", 
      valueLink: "tel:+436642811113" 
    },
    {
      icon: "language", 
      name: "getsession.org", 
      nameLink: "https://getsession.org",
      value: "Session ID", 
      valueLink: "clipboard:0525378eb68e280c38f4ccfa1efb2a41ee13773dfdd7b6654223e2f625accbfa09" 
    },
  ];

}
