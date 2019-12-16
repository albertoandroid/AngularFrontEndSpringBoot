import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpUser={

  }

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  signUp(){
    this.auth.signUpUser(this.signUpUser)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.jwtToken)
          this.router.navigate(['/tasks'])
        },
        err => console.log(err)
      )
  }

}
