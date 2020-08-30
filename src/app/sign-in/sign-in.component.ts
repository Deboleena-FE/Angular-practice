import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signupForm = {
    name:'',
    password: ''
  };
  imageUrl="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=1500&q=80"
  constructor() { }

  ngOnInit(): void {
  }

}
