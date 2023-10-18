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
  public print: boolean = false;

  public model: Category[] = [
    {
      name: "Public Cloud",
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
    {
      name: "Infrastructure",
      icon: undefined,
      skills: [
        { name: "Virtualization", icon: "devicon-python-plain", level: 5 },
        { name: "Linux", icon: "devicon-python-plain", level: 4 },
        { name: "Container", icon: "devicon-python-plain", level: 5 },
        { name: "Networking", icon: "devicon-python-plain", level: 4 },
        { name: "Storage", icon: "devicon-python-plain", level: 3 },
      ],
    },
    {
      name: "Automation",
      icon: undefined,
      skills: [
        { name: "Ansible", icon: "devicon-python-plain", level: 3 },
        { name: "Terraform", icon: "devicon-python-plain", level: 4 },
        { name: "Puppet", icon: "devicon-python-plain", level: 2 },
      ],
    },
    {
      name: "Monitoring & Logging",
      icon: undefined,
      skills: [
        { name: "Elasticsearch", icon: "devicon-python-plain", level: 4 },
        { name: "Prometheus", icon: "devicon-python-plain", level: 5 },
        { name: "Grafana", icon: "devicon-python-plain", level: 4 },
        { name: "InfluxDB", icon: "devicon-python-plain", level: 3 },
      ],
    },    {
      name: "Databases",
      icon: undefined,
      skills: [
        { name: "PostgreSQL", icon: "devicon-python-plain", level: 3 },
        { name: "MariaDB / MySQL", icon: "devicon-python-plain", level: 2 },
        { name: "MongoDB", icon: "devicon-python-plain", level: 4 },
      ],
    },
    {
      name: "Other Skills",
      icon: undefined,
      skills: [
        { name: "AI/ML", icon: "devicon-python-plain", level: 2 },
      ],
    },
  ];

}
