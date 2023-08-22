import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('Me') meDropdown!: ElementRef;
  @ViewChild('Company') companyDropdown!: ElementRef;

  isMeDropdownOpen: boolean = false;
  isCompanyDropdownOpen: boolean = false;

  toggleMeDropdown() {
    this.isMeDropdownOpen = !this.isMeDropdownOpen;
    if (!this.isCompanyDropdownOpen) {
      this.closeOtherDropdown(this.meDropdown.nativeElement);
    }
  }

  toggleCompanyDropdown() {
    this.isCompanyDropdownOpen = !this.isCompanyDropdownOpen;
    if (!this.isMeDropdownOpen) {
      this.closeOtherDropdown(this.companyDropdown.nativeElement);
    }
  }

  closeOtherDropdown(currentDropdown: HTMLElement) {
    if (currentDropdown !== this.meDropdown.nativeElement) {
      this.isMeDropdownOpen = false;
    }
    if (currentDropdown !== this.companyDropdown.nativeElement) {
      this.isCompanyDropdownOpen = false;
    }
  }
}
