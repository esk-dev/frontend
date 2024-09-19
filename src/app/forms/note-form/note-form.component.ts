import { ChangeDetectionStrategy, Component, computed, input, InputSignal, OnInit, Signal } from '@angular/core';
import { NoteModel } from '../../core/models/note.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFor } from '../../core/form/form';
import { NoteTag } from '../../core/models/note-tags.model';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { TagsAutocompleteControlComponent } from '../tags-autocomplete-control/tags-autocomplete-control.component';
import { TagModel } from '@core/models/tag.model';

/**
 *  @description Поля для заполнения из формы
 */
type NoteFormFields = Omit<NoteModel, 'id' | 'user_id' | 'created_at' | 'updated_at'> & { tags: Array<TagModel> };
/**
 * @description Типизированная форма
 */
type NoteForm = FormFor<NoteFormFields>;

@Component({
  selector: 'notes-note-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, TagsAutocompleteControlComponent, MatLabel],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteFormComponent implements OnInit {
  public readonly editableMode: InputSignal<boolean> = input(false, { transform: (state) => Boolean(state) });

  public readonly editedNoteModel: Signal<NoteModel | null> = computed(() => {
    return this.editableMode() ? this.someMethodToGetModel() : null;
  });

  public readonly form: FormGroup<NoteForm>;

  constructor(private readonly fb: FormBuilder) {
    /**
     * Несмотря на вызов nonNullable из fb, пришлось помечать каждый
     * контрол nonNullable из-за ts предупреждения
     */
    this.form = this.fb.nonNullable.group<NoteForm>({
      content: this.fb.control<string>('', { nonNullable: true }),
      sub_title: this.fb.control<string>('', { nonNullable: true }),
      title: this.fb.control<string>('', { nonNullable: true }),
      tags: this.fb.control<Array<TagModel>>([], { nonNullable: true }),
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(console.log);
  }

  private someMethodToGetModel(): NoteModel {
    return {} as NoteModel;
  }
}
