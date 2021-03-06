import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  constructor() {}

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {}
}
