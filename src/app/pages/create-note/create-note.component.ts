import { Component } from '@angular/core';
import { NoteFormComponent } from '../../forms/note-form/note-form.component';
import { ContainerComponent } from '@ui/container/container.component';

@Component({
  selector: 'notes-create-note',
  standalone: true,
  imports: [NoteFormComponent, ContainerComponent],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss',
})
export class CreateNoteComponent {}
