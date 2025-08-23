import { Component, input, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderMenu } from "../../../interfaces/header-menu.interface";

@Component({
  selector: 'header-desktop',
  imports: [RouterModule],
  templateUrl: './header-desktop.html',
})
export class HeaderDesktop {
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