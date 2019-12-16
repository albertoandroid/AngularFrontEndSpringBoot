import { Component, OnInit } from '@angular/core';
import { AuthService} from '../service/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = {}

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.auth.loginUser(this.loginUser)
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
