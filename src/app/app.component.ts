import { Component } from '@angular/core';

export interface ToolbarButton {
  text: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedButton?: ToolbarButton;

  toolbarButtons: ToolbarButton[] = [
    { text: 'About', icon: 'person', link: '/about'},
    { text: 'Certificates', icon: 'workspace_premium', link: '/certs'},
    { text: 'Experience', icon: 'touch_app', link: '/xp'},
    { text: 'Skills', icon: 'build', link: '/skills'},
    { text: 'Eduction', icon: 'school', link: '/edu'},
    { text: 'One Pager', icon: 'article', link: '/page'},
  ];

}
