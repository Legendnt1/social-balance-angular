import { Component, ElementRef, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderMenu } from '../../interfaces/header-menu.interface';
import { HEADER_MENUS } from '../../consts/header-menu.const';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.html',
})
export class Header {
  menuOpen = signal(false);
  openDropdown = signal<string | null>(null);

  constructor(private element: ElementRef<HTMLElement>) {}

  headerMenus: HeaderMenu[] = HEADER_MENUS;

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
