import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredenciaisDTO } from '../model/DTO/credenciais.dto';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    creds : CredenciaisDTO = {
        email : "vitinsk@hotmail.com",
        senha : "123"
      }
    constructor(private router: Router,
                private auth : AuthService) {}

    ngOnInit() {}

    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/inicio']);
        this.auth.authenticate(this.creds).subscribe(response => {

        })

        
    }
}
