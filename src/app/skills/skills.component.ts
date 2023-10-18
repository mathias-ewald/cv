import { Component, Input } from '@angular/core';

export interface Category {
  name: string;
  description?: string;
  icon?: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  level: 1 | 2 | 3 | 4 | 5 ;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  @Input()
  public contentOnly: boolean = false;

  public model: Category[] = [
    {
      name: "Cloud",
      icon: undefined,
      skills: [
        { name: "Google Cloud Platform", icon: "devicon-python-plain", level: 4 },
        { name: "Amazon Web Services", icon: "devicon-python-plain", level: 4 },
        { name: "Microsoft Azure", icon: "devicon-python-plain", level: 3 },
        { name: "VMware", icon: "devicon-python-plain", level: 4 },
      ],
    },
    {
      name: "Coding",
      icon: undefined,
      skills: [
        { name: "Spring Framework", icon: "devicon-python-plain", level: 4 },
        { name: "Angular", icon: "devicon-python-plain", level: 4 },
        { name: "Python", icon: "devicon-python-plain", level: 3 },
        { name: "BASH", icon: "devicon-python-plain", level: 4 },
      ],
    },
  ];

}
