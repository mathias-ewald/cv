import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EduComponent } from './edu/edu.component';
import { SkillsComponent } from './skills/skills.component';
import { XpComponent } from './xp/xp.component';
import { CertsComponent } from './certs/certs.component';
import { OnePagerComponent } from './one-pager/one-pager.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'certs', component: CertsComponent },
  { path: 'xp', component: XpComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'edu', component: EduComponent },
  { path: 'page', component: OnePagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
