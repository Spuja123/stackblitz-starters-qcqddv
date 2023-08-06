import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Input()
  name!: string;

  isOpen = false;
  isDropdownOpen = false;
  brandLogo =
    'https://raw.githubusercontent.com/Spuja123/stackblitz-starters-qcqddv/main/src/app/assets/img/your_logo.png';
  constructor(private router: Router) {}

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  ngOnInit() {
    console.log(this.router);
  }
}
