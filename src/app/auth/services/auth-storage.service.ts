import { Injectable } from '@angular/core';
import { StorageService } from '@core/storage/service/storage.service';
import { IUserData } from '@app/auth/user.interface';
import { BehaviorSubject } from 'rxjs';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class AuthStorageService {
  public isAuthed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private readonly storageService: StorageService) {
    this.isAuthed$.next(this.isLoggedIn());
  }

  clean(): void {
    this.storageService.clear();
    this.isAuthed$.next(false);
  }

  saveUser(user: IUserData): void {
    this.storageService.removeItem(USER_KEY);
    this.storageService.setItem(USER_KEY, JSON.stringify(user));
    this.isAuthed$.next(true);
  }

  getUser(): IUserData | null {
    const user: string | null = this.storageService.getItem(USER_KEY);
    console.log(user);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  isLoggedIn(): boolean {
    const user = this.storageService.getItem(USER_KEY);
    return !!user;
  }
}
