import { CanActivateFn, Router } from '@angular/router';
import { AuthStorageService } from '@app/auth/services/auth-storage.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthStorageService).isAuthed$.pipe(
    tap((state: boolean) => {
      console.log(state);
      if (!state) {
        router.navigate(['/auth']);
      }
    }),
  );
};
