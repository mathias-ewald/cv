import { Component, Input } from '@angular/core';

export interface TimelineItem {
  title: string;
  subtitle: string;
  icon?: string;
  content: string;
  date: string;
  past: boolean;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  @Input()
  public value?: TimelineItem[] = [];

}
