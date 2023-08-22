import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { IProfile } from './../../interfaces/iprofile';
import { StriveApiService } from 'src/app/services/strive-api.service';
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
  scrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 200) {
      this.scrolled = true;

    } else {
      this.scrolled = false;
    }
  }


  toggleMeDropdown() {
    this.isMeDropdownOpen = !this.isMeDropdownOpen;

  }

  toggleCompanyDropdown() {
    this.isCompanyDropdownOpen = !this.isCompanyDropdownOpen;

  }

  profileData?: IProfile;
  constructor(public striveSrv: StriveApiService) {}

  ngOnInit(): void {
    this.striveSrv.getProfile().subscribe((data) => (this.profileData = data));
    console.log(this.profileData);
  }

  getProfileData() {}

}
