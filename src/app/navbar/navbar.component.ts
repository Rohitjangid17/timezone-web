import { LoginComponent } from './../login/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private dialogRef: MatDialog) { }

  openDialog() {
    this.dialogRef.open(LoginComponent);
  }

}
