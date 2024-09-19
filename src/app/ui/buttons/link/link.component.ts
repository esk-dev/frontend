import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigationLink } from '@core/navigation';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'notes-link',
  standalone: true,
  imports: [RouterLink, MatButtonModule, RouterLinkActive],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  public readonly navLink: InputSignal<INavigationLink> = input.required<INavigationLink>();
}
