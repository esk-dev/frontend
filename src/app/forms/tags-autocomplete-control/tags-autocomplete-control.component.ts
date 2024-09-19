import { ChangeDetectorRef, Component, ElementRef, forwardRef, inject, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TagModel } from '@core/models/tag.model';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRemove, MatChipRow } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'notes-tags-autocomplete-control',
  standalone: true,
  imports: [
    MatFormField,
    MatChipGrid,
    MatChipRow,
    MatChipRemove,
    MatIcon,
    MatAutocompleteTrigger,
    MatChipInput,
    MatAutocomplete,
    AsyncPipe,
    MatOption,
    ReactiveFormsModule,
    MatLabel,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagsAutocompleteControlComponent),
      multi: true,
    },
  ],
  templateUrl: './tags-autocomplete-control.component.html',
  styleUrl: './tags-autocomplete-control.component.scss',
  host: {},
})
export class TagsAutocompleteControlComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input') private readonly input!: ElementRef<HTMLInputElement>;

  public matchedTags$!: Observable<TagModel[]>;
  public readonly separatorKeysCodes: Readonly<[number, number]> = [ENTER, COMMA] as const;
  public readonly isDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly value$: BehaviorSubject<TagModel[]> = new BehaviorSubject<TagModel[]>([]);
  public readonly tagsCntrl: FormControl<string | null> = new FormControl<string | null>('');

  constructor() {}

  ngOnInit(): void {
    this.matchedTags$ = this.tagsCntrl.valueChanges.pipe(
      startWith(null),
      distinctUntilChanged(),
      debounceTime(100),
      filter(Boolean),
      filter((str: string) => str.length > 3),
      switchMap((str: string) => this.fetchTagsByStr$(str)),
    );
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled$.next(isDisabled);
  }

  writeValue(value: TagModel[]): void {
    this.value$.next(value);
  }

  updateValue(value: TagModel[]): void {
    this.value$.next(value);
    this._onChange(value);
    this._onTouched();
  }

  _onChange: any = () => {};
  _onTouched: any = () => {};

  /**
   * Создаем новый тег, если его не было найдено
   * Пушим в value$
   */
  add(event: MatChipInputEvent) {
    const value = event.value;

    if (value) {
      const tag: TagModel = {
        tag_name: value,
        id: Math.floor(Math.random() * 10),
      };
      this.updateValue([...this.value$.value, tag]);
    }
    event.chipInput!.clear();
  }

  /**
   * Пушим выбранный тег из запрошенных тегов
   * @param event
   */
  selected(event: MatAutocompleteSelectedEvent) {
    const selectedTag: TagModel = event.option.value;
    this.updateValue([...this.value$.value, selectedTag]);
    this.input.nativeElement.value = '';
    this.tagsCntrl.setValue(null);
  }

  /**
   * Удалить тег выбранных тегов
   * @param removedTag
   */
  remove(removedTag: TagModel): void {
    const updatedTags = this.value$.value.filter((tag) => tag.id !== removedTag.id);
    this.updateValue(updatedTags);
  }

  /**
   * Запрос новых тегов
   * @param str
   */
  fetchTagsByStr$(str: string): Observable<TagModel[]> {
    return of(this.value$.value);
  }
}
