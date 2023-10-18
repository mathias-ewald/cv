import { Component, Input } from '@angular/core';

export interface Info {
  icon?: string;
  iconLink?: string;
  name: string;
  nameLink?: string;
  value: string;
  valueLink?: string;
}


@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent {

  @Input()
  model: Info[] = []


  public linkType(value: string): 'router' | 'clipboard' | 'href' {
    if (value.startsWith("clipboard:")) {
      return "clipboard";
    } else if (this.isArrayOfStrings(value)) {
      return "router";
    }
    return "href";
  }

  public clipboardValue(value: string): string {
    return value.replace("clipboard:", "");
  }

  private isArrayOfStrings(value: unknown): boolean {
    return Array.isArray(value) && value.every(item => typeof item === "string");
  }

}
