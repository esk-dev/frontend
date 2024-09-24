import { Injectable } from '@angular/core';
import { BaseApiService } from '@core/api/common/base-api.service';
import { ITag } from '@core/dtos/tag';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TagApiService extends BaseApiService {
  constructor() {
    super('Tags');
  }

  public getTagsByName(query: string): Observable<ITag[]> {
    const uri = this.apiUri;
    return this.httpService.get<ITag[]>(`/${uri}`);
  }
}
