import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

export interface ToolbarButton {
  text: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {

  selectedButton?: ToolbarButton;

  toolbarButtons: ToolbarButton[] = [
    { text: 'About', icon: 'person', link: '/about'},
    { text: 'Certificates', icon: 'workspace_premium', link: '/certs'},
    { text: 'Experience', icon: 'touch_app', link: '/xp'},
    { text: 'Skills', icon: 'build', link: '/skills'},
    { text: 'Education', icon: 'school', link: '/edu'},
    { text: 'PDF', icon: 'print', link: '/page'},
  ];

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
