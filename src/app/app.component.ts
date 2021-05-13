import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anthony-resume';

  screenWide = true;

  getScreenWidth(){
    if (screen.width < 365){
      this.screenWide = false;
    }
  }

  ngOnInit(): void{
    this.getScreenWidth();
  }
}
