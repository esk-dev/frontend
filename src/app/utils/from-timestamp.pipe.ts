import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromTimestamp',
  standalone: true,
})
export class FromTimestampPipe implements PipeTransform {
  transform(value: string): Date {
    return new Date(value);
  }
}
