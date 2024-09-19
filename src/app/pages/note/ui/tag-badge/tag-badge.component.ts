import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { TagModel } from '../../../../core/models/tag.model';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'notes-tag-badge',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './tag-badge.component.html',
  styleUrl: './tag-badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagBadgeComponent {
  public readonly tag: InputSignal<TagModel> = input.required();
}
