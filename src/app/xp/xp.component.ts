import { Component, Input } from '@angular/core';
import { TimelineItem } from '../timeline/timeline.component';

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.scss']
})
export class XpComponent {

  @Input()
  public print: boolean = false;


  public timelineItems?: TimelineItem[] = [
    {
        title: "VMware",
        subtitle: "Presales Solutions Engineer",
        icon: "assets/vmware.png",
        content: "interview customers to understand their strategic goals and business values to achieve, map customer goals to tanzu products and features, measure success",
        date: "2020 - today",
        past: true
    },
    {
      title: "Pivotal", 
      subtitle: "Solutions Architect", 
      icon: "assets/pivotal.png",
      content: "professional services specialist for pivotal cloud foundry (pcf) and pivotal container service (pks), customer enablement", 
      date: "2018 - 2020", 
      past: false 
    },
    {
      title: "meshcloud GmbH", 
      subtitle: "Co-Founder", 
      icon: "assets/meshcloud.png",
      content: "development of the business plan, lead architect for the iaas stack, head of operations, change management, risk analysis", 
      date: "2017-2019", 
      past: false 
    },
    {
      title: "evoila GmbH", 
      subtitle: "Co-Founder, Partner Solutions Architect", 
      icon: "assets/evoila.png",
      content: "business strategy, team development, project lead, open source cloud technologies, mentor team members and support their personal development, customer acquisition, hiring",
      date: "2015 - 2018",
      past: false
    },
    {
      title: "Freelance Consultant", 
      subtitle: "Virtualization Specialist", 
      icon: "assets/freelancer.png",
      content: "server and desktop virtualization, vmware vsphere, vcloud, kvm, xen, pacemaker, drbd, trainings, workshop", 
      date: "2008 - 2015", 
      past: false },
  ];

}
