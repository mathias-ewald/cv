import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.scss']
})
export class XpComponent {

  @Input()
  public contentOnly: boolean = false;

}
