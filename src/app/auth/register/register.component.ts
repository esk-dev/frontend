import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFor } from '@app/utils/form/form';
import { AuthService } from '@app/auth/services/auth.service';
import { finalize, Subject, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContainerComponent } from '@ui/container/container.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

interface TRegister {
  username: string;
  email: string;
  password: string;
}

@Component({
  standalone: true,
  imports: [
    ContainerComponent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatCard,
    MatCardHeader,
    MatProgressBar,
    MatCardContent,
    MatDivider,
    MatCardActions,
    MatCardFooter,
    MatButton,
    MatLabel,
    AsyncPipe,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  public form: FormGroup<FormFor<TRegister>> = new FormGroup<FormFor<TRegister>>({
    email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  });

  public readonly loading$: Subject<boolean> = new Subject();
  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  onSubmit(): void {
    this.loading$.next(true);
    if (this.form.invalid) {
      this.form.markAsDirty();
      this.form.markAllAsTouched();
      this.loading$.next(false);
      return;
    }
    this.form.disable();

    const { email, password, username } = this.form.getRawValue();

    this.authService
      .register(username, email, password)
      .pipe(
        take(1),
        finalize(() => this.loading$.next(false)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/notes']);
        },
        error: (error) => {
          console.log(error);
          this.form.enable();
        },
      });
  }
}
