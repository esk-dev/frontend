import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteForm } from '@app/notes/pages/create-note/create-note.component';
import { ITag } from '@core/dtos/tag';
import { FormFor } from '@app/utils/form/form';

export function createNoteForm(fb: FormBuilder): FormGroup<NoteForm> {
  return fb.nonNullable.group<NoteForm>({
    content: fb.control<string | null>(null, { nonNullable: true, validators: [Validators.required] }),
    title: fb.control<string | null>(null, { nonNullable: true, validators: [Validators.required] }),
    tags: fb.control<Array<ITag>>([], { nonNullable: true, validators: [Validators.required] }),
  });
}

export function mapToTagName<T>(form: FormGroup<FormFor<T>>) {
  const tagsCntrl = form.get('tags');
  const tags = tagsCntrl?.value;
  return Array.isArray(tags) ? tags.map((tag: ITag) => tag.tagName) : [];
}
