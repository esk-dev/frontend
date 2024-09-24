import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from '@ui/container/container.component';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatChipEditedEvent, MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRemove, MatChipRow } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ITag } from '@core/dtos/tag';

@Component({
  standalone: true,
  imports: [ContainerComponent, MatLabel, MatChipGrid, MatFormField, MatChipInput, MatIcon, MatChipRemove, MatChipRow, MatHint, MatInput],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent {
  public readonly addOnBlur = true;
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  tags: ITag[] = [
    {
      tagName: 'test',
      id: 2,
    },

    {
      tagName: 'test',
      id: 3,
    },

    {
      tagName: 'test',
      id: 5,
    },

    {
      tagName: 'test',
      id: 2,
    },

    {
      tagName: 'test',
      id: 3,
    },

    {
      tagName: 'test',
      id: 5,
    },
    {
      tagName: 'test',
      id: 2,
    },

    {
      tagName: 'test',
      id: 3,
    },

    {
      tagName: 'test',
      id: 5,
    },
  ];

  remove(tag: ITag) {
    console.log(tag);
  }

  edit(tag: ITag, event: MatChipEditedEvent) {
    console.log(tag, event);
  }

  add(event: MatChipInputEvent) {
    console.log(event);
  }
}
