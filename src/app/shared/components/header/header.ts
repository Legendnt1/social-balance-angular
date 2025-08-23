import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderMenu } from '../../interfaces/header-menu.interface';
import { HEADER_MENUS } from '../../consts/header-menu.const';
import { HeaderDesktop } from './header-desktop/header-desktop';
import { HeaderMobile } from './header-mobile/header-mobile';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, HeaderDesktop, HeaderMobile],
  templateUrl: './header.html',
})
export class Header {
  menuOpen = signal(false);
  openDropdown = signal<string | null>(null);
  headerMenus: HeaderMenu[] = HEADER_MENUS;

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  toggleDropdown(label: string): void {
    this.openDropdown.update((cur) => (cur === label ? null : label));
  }

}
