import { Component } from '@angular/core';
import { faGlobe,faArrowRight,faCog,faQuestion } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faglobe = faGlobe
  cog = faCog
  question = faQuestion
  next = faArrowRight
  title = 'NewClientLol';
}
