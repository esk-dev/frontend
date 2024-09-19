import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container/container.component';

@Component({
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
