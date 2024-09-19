import { Component, input, InputSignal } from '@angular/core';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { TagBadgeComponent } from '../tag-badge/tag-badge.component';
import { MatChipGrid, MatChipRow } from '@angular/material/chips';
import { DatePipe } from '@angular/common';
import { FromTimestampPipe } from '../../../../utils/from-timestamp.pipe';
import { fakeModel, NoteModel } from '@core/models/note.model';

@Component({
  selector: 'notes-note-card',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatCardActions,
    MatIcon,
    MatDivider,
    TagBadgeComponent,
    MatChipRow,
    MatChipGrid,
    DatePipe,
    FromTimestampPipe,
  ],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss',
})
export class NoteCardComponent {
  public readonly note: InputSignal<NoteModel> = input(fakeModel);
}
