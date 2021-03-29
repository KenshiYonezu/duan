import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  onUser = false

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  clickUser() {
    this.onUser = this.onUser ? false : true;
    console.log("---", this.onUser);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
