import { Component, Input } from '@angular/core';
import { TimelineItem } from '../timeline/timeline.component';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.scss']
})
export class EduComponent {

  @Input()
  public print: boolean = false;

  public timelineItems?: TimelineItem[] = [
    {
        title: "Fernuniversität Hagen",
        subtitle: "Master of Science (M.Sc.)",
        icon: 'assets/university.png',
        content: "Computer Science (Informatik)",
        date: "2025 ;)",
        past: true
    },{
      title: "FAU Erlangen-Nürnberg", 
      subtitle: "Bachelor of Arts (B.A.)", 
      icon: 'assets/university.png',
      content: "Information Systems (Wirtschaftsinformatik)", 
      date: "2010", 
      past: false
    },{
      title: "Gymnasium Pegnitz", 
      subtitle: "High School Diploma (Abitur)", 
      icon: 'assets/school.png',
      content: "Mathematics, English, Economics, Biology", 
      date: "2006", 
      past: false
    },
  ];

}
