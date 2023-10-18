import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.scss']
})
export class EduComponent {

  @Input()
  public contentOnly: boolean = false;

}
