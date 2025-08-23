import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEAM_MEMBERS } from '../../consts/about/members.const';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
})
export class About {
  teamMembers = TEAM_MEMBERS;
}
