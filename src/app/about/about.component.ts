import { Component, Input } from '@angular/core';
import { Info } from '../info-list/info-list.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  @Input()
  public print: boolean = false;



  public infos: Info[] = [
    {"icon": "cake", "name": "Birthday", "value": "May 21st, 1986" },
    {"icon": "flag", "name": "Nationality", "value": "German" },
    {"icon": "language", "name": "Languages", "value": "German, English" },
    {
      icon: "home", 
      name: "Home Address",
      value: "2405, Austria",
      action: {
        type: "googlemaps",
        value: "https://maps.app.goo.gl/HAyRA7BEtEuTBBUv9"
      }
    },
    {
      icon: "email", 
      name: "Email Address", 
      value: "mathias.ewald@googlemail.com", 
      action: {
        type: "mailto",
        value: "mathias.ewald@googlemail.com"
      }
    }, 
    {
      icon: "language", 
      name: "LinkedIn Profile", 
      value: "mathias-ewald", 
      action: {
        type: "href",
        value: "https://www.linkedin.com/in/mathias-ewald/" 
      }
    },
    {
      icon: "code", 
      name: "GitHub Profile", 
      value: "mathias-ewald", 
      action: {
        type: "href",
        value: "https://github.com/mathias-ewald"
      }
    },
    {
      icon: "call", 
      name: "Phone Number", 
      value: "+43 664 2811113", 
      action: {
        type: "tel",
        value: "+436642811113"
      }
    },
    {
      icon: "language", 
      name: "getsession.org", 
      value: "Session ID", 
      action: {
        type: "clipboard",
        value: "0525378eb68e280c38f4ccfa1efb2a41ee13773dfdd7b6654223e2f625accbfa09"
      }
    },
  ];

}
