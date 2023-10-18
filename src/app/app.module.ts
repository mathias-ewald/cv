import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { CertsComponent } from './certs/certs.component';
import { XpComponent } from './xp/xp.component';
import { SkillsComponent } from './skills/skills.component';
import { EduComponent } from './edu/edu.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list';
import { InfoListComponent } from './info-list/info-list.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OnePagerComponent } from './one-pager/one-pager.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CertsComponent,
    XpComponent,
    SkillsComponent,
    EduComponent,
    InfoListComponent,
    OnePagerComponent,
    TimelineComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    ClipboardModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
