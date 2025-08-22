import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;
  dropDown: string | null = null;

  constructor(private el: ElementRef) {}

  toggleDropDown(id: string, event?:  Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.dropDown = this.dropDown === id ? null : id;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.dropDown = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    // if click happened outside this component, close menus
    if (!this.el.nativeElement.contains(target)) {
      this.dropDown = null;
      this.menuOpen = false;
    }
  }
}
