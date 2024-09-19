import { HttpClient, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ENVIRONMENT, IEnvironment } from '@core/env';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(ENVIRONMENT) private readonly env: IEnvironment,
  ) {}

  delete<T = void>(url: string, options?: any): Observable<HttpEvent<T>> {
    return this.httpClient.delete<T>(this.makeUrl(url), options).pipe(catchError((error) => throwError(() => error)));
  }

  get<T = void>(url: string, options?: any): Observable<T> {
    return this.httpClient.get<T>(this.makeUrl(url), {}).pipe(catchError((error) => throwError(() => error)));
  }

  patch<T = void>(url: string, body: null | unknown, options?: any): Observable<T> {
    return this.httpClient.patch<T>(this.makeUrl(url), body, {}).pipe(catchError((error) => throwError(() => error)));
  }

  post<T = void>(url: string, body?: null | unknown, options?: any): Observable<T> {
    return this.httpClient.post<T>(this.makeUrl(url), body ?? null, {}).pipe(catchError((error) => throwError(() => error)));
  }

  put<T = void>(url: string, body: null | unknown, options?: any): Observable<T> {
    return this.httpClient.put<T>(this.makeUrl(url), body, {}).pipe(catchError((error) => throwError(() => error)));
  }

  private makeUrl(url: string): string {
    return url.indexOf('http') === 0 ? url : `${this.env.API_URL}${url}`;
  }
}
