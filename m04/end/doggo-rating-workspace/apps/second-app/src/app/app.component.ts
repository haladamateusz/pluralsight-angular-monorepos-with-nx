import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NotificationService }  from "@ps-doggo-rating/shared/util-common";


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'ps-doggo-rating-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'second-app';
}
