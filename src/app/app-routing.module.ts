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
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'certs', component: CertsComponent, data: { animation: 'CertsPage' } },
  { path: 'xp', component: XpComponent, data: { animation: 'XPPage' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'SkillsPage' } },
  { path: 'edu', component: EduComponent, data: { animation: 'EduPage' } },
  { path: 'page', component: OnePagerComponent, data: { animation: 'PDFPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
