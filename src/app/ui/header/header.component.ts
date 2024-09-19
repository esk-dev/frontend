import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigationLink, LINKS } from '@core/navigation';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LinkComponent } from '../buttons/link/link.component';
import { DeviceObserverService, ObservedDevicesType } from '@ui/utils/breakpoint.service';
import { distinctUntilChanged, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { IconComponent } from '@ui/icon/icon.component';

@Component({
  selector: 'notes-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    LinkComponent,
    AsyncPipe,
    MatIcon,
    MatIconButton,
    MatMenuTrigger,
    MatMenuItem,
    MatMenu,
    IconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

  public readonly navLinks: INavigationLink[] = inject<INavigationLink[]>(LINKS);

  public readonly showMenu$: Observable<boolean> = inject(DeviceObserverService).device$.pipe(
    map((device: ObservedDevicesType) => device === 'Mobile' || device === 'Tablet'),
    distinctUntilChanged(),
    takeUntil(this.destroy$),
  );

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
