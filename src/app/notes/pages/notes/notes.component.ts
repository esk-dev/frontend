import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { ContainerComponent } from '@ui/container/container.component';
import { NoteCardComponent } from '@notes/ui/note-card/note-card.component';
import { NotesStore } from '@notes/state/notes.store';
import { INote } from '@core/dtos/note';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [ContainerComponent, NoteCardComponent],
  providers: [NotesStore],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesComponent implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly notesStore = inject(NotesStore);

  public readonly notes: Signal<INote[]> = this.notesStore.sortedByDescNotes;

  ngOnInit(): void {
    this.notesStore.loadAll();
  }

  redirectToEditPage(note: INote): void {
    this.router.navigate(['/notes/edit/', note.id]);
  }

  requestDeleteNote(note: INote): void {}
}
