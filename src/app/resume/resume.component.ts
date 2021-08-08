import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  title = 'anthony-resume';

  screenWide = true;

  getScreenWidth() {
    if (screen.width < 365) {
      this.screenWide = false;
    }
  }

  ngOnInit(): void {
    this.getScreenWidth();
  }

}
