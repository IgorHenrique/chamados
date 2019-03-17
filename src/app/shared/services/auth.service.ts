import { Injectable } from '@angular/core';
import { StorageProvider } from '../storage';
import { CredenciaisDTO } from 'src/app/model/DTO/credenciais.dto';
import { API_CONFIG } from '../api.config';
import { HttpClient } from '@angular/common/http';
import { LocalUser } from '../local_user';
import { STORAGE_KEYS } from '../storage_keys.config';
//import {JwtHelper} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 // jwtHelper : JwtHelper = new JwtHelper();

  constructor(public http: HttpClient) {
    
  }



  authenticate(cred: CredenciaisDTO){
    return this.http.post(
      `${API_CONFIG.baseUrl}/login`,
      cred,
      {
        observe:'response',
        responseType:'text'
      }
    );
  }

  refreshToken() {
    return this.http.post(
     `${API_CONFIG.baseUrl}/auth/refresh_token`,           
 {},
 {
     observe: 'response',
     responseType: 'text'
 });
 }

 successfulLogin(authorizationValue : string){
  let tok = authorizationValue.substring(7);
  let user : LocalUser = {
      token : tok,
      email : 'a' //this.jwtHelper.decodeToken(tok).sub
  };
  this.setLocalUser(user);
 
 
}

logout(){
  this.setLocalUser(null); 
}


getLocalUser() : LocalUser{
  let user = localStorage.getItem(STORAGE_KEYS.localUser)
  if (user == null) {
    return null;
  }
  else{
    return JSON.parse(user);
  }
}

setLocalUser(obj : LocalUser){
  if(obj == null){
      localStorage.removeItem(STORAGE_KEYS.localUser)
  }
  else{
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
  }
}

}
