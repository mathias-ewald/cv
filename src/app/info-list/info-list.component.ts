import { Component, Input } from '@angular/core';

export interface Info {
  icon?: string;
  name: string;
  value: string;
  action?: Action;
}

export interface Action {
  type: 'router' | 'clipboard' | 'href' | 'tel' | 'mailto' | 'googlemaps';
  value: string;
}


@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent {

  @Input()
  model: Info[] = []

}
