import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContainerComponent } from '@ui/container/container.component';
import { NoteCardComponent } from '@pages/note/ui/note-card/note-card.component';

@Component({
  standalone: true,
  imports: [ContainerComponent, NoteCardComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesComponent {}
