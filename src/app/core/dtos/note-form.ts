import { INote } from '@core/dtos/note';
/**
 *  @description Поля для заполнения из формы
 */
export type NoteFormFields = Omit<INote, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;
