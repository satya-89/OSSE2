import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = 'Hansa Developers';
  userPost: string = 'Developer, Designer';
  
  constructor() { }

  ngOnInit() {
  }

}
