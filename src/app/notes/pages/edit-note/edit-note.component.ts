import { ChangeDetectionStrategy, Component, effect, inject, input, InputSignal, OnInit } from '@angular/core';
import { ContainerComponent } from '@ui/container/container.component';
import { NoteFormComponent } from '@app/notes/ui/note-form/note-form.component';
import { MatButton } from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createNoteForm, mapToTagName } from '@app/notes/ui/note-form/create-note-form';
import { NoteForm } from '@app/notes/pages/create-note/create-note.component';
import { NotesStore } from '@notes/state/notes.store';
import { INote } from '@core/dtos/note';
import { getState } from '@ngrx/signals';
import { NoteFormFields } from '@core/dtos/note-form';

@Component({
  selector: 'notes-edit-note',
  standalone: true,
  imports: [ContainerComponent, NoteFormComponent, MatButton],
  providers: [NotesStore],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditNoteComponent implements OnInit {
  public readonly id: InputSignal<number> = input.required<number>();

  public editedNote!: INote;
  public readonly form: FormGroup<NoteForm>;

  private readonly notesStore = inject(NotesStore);

  constructor(private readonly fb: FormBuilder) {
    this.form = createNoteForm(this.fb);
    effect(() => {
      const state = getState(this.notesStore);
      this.editedNote = state.entityMap[this.id()];
      this.setToForm({ ...this.editedNote });
    });
  }

  ngOnInit(): void {
    this.notesStore.loadById(this.id());
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAsDirty();
      this.form.markAsTouched();
      return;
    }

    const updatedNote: INote = {
      ...this.editedNote,
      ...this.form.getRawValue(),
      tags: mapToTagName<NoteFormFields>(this.form),
    };

    this.notesStore.editNote(updatedNote);
  }

  setToForm(noteFormValues: NoteFormFields): void {
    this.form.patchValue(noteFormValues);
  }
}
