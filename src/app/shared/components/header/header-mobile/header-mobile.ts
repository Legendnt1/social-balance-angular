import { Component, input, signal } from '@angular/core';
import { HeaderMenu } from '../../../interfaces/header-menu.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'header-mobile',
  imports: [RouterModule],
  templateUrl: './header-mobile.html',
})
export class HeaderMobile {

  menuOpen = signal(false);
  openDropdown = signal<string | null>(null);
  headerMenus = input<HeaderMenu[]>();

  
  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  toggleDropdown(label: string): void {
    this.openDropdown.update((cur) => (cur === label ? null : label));
  }

  closeAll(): void {
    this.menuOpen.set(false);
    this.openDropdown.set(null);
  }
}
