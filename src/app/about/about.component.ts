import { Component, Input } from '@angular/core';
import { Info } from '../info-list/info-list.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  @Input()
  public contentOnly: boolean = false;

  public infos: Info[] = [
    {"icon": "person", "name": "Full Name", "value":  "Mathias Ingo Ewald" }, 
    {"icon": "cake", "name": "Birthday", "value": "May 21st, 1986" },
    {"icon": "flag", "name": "Nationality", "value": "German" },
    {"icon": "home", "name": "Address", "value": "2405, Austria" },
    {"icon": "language", "name": "Languages", "value": "German, English" },
  ];

}
