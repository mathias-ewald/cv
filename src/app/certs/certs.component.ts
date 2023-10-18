import { Component, Input } from '@angular/core';

export interface Certificate {
  icon: string;
  short?: string;
  name: string;
  issuer: string;
  description?: string;
  link?: string;
}

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.scss']
})
export class CertsComponent {

  @Input()
  public contentOnly: boolean = false;


  public model: Certificate[] = [
    { 
      icon: "workspace_premium",
      short: undefined, 
      name: "Advanced Learning Algorithms",
      issuer: "Stanford ONLINE",
      description: undefined,
      link: "https://www.coursera.org/account/accomplishments/certificate/HC6X8PB23J8C"
    },
    { 
      icon: "workspace_premium",
      short: undefined, 
      name: "Supervised Machine Learning",
      issuer: "Stanford ONLINE",
      description: undefined,
      link: "https://www.coursera.org/account/accomplishments/certificate/TBJJKZ2E99JC"
    },
    { 
      icon: "workspace_premium",
      short: "CKA", 
      name: "Certified Kubernetes Administrator",
      issuer: "The Linux Foundation",
      description: undefined,
      link: "https://www.credly.com/badges/a39a0928-f1b0-4d16-8fee-f0ca92549732/linked_in_profile"
    },
    { 
      icon: "workspace_premium",
      short: "CKAD", 
      name: "Certified Kubernetes Application Developer",
      issuer: "The Linux Foundation",
      description: undefined,
      link: "https://www.credly.com/badges/4e8e2d8f-cfc1-44a0-b860-9cce7a7f56e6/linked_in_profile"
    },
    { 
      icon: "workspace_premium",
      short: "CCNA", 
      name: "Cisco Certified Network Associate",
      issuer: "Cisco",
      description: undefined,
      link: undefined,
    },
    { 
      icon: "workspace_premium",
      short: "VCAP-DA", 
      name: "VMware Certified Advanced Professional - Datacenter Virtualization",
      issuer: "VMware",
      description: undefined,
      link: undefined,
    },
    { 
      icon: "workspace_premium",
      short: "VCP-DV", 
      name: "VMware Certified Professional - Datacenter Virtualization",
      issuer: "VMware",
      description: undefined,
      link: undefined,
    }
  ];

}
