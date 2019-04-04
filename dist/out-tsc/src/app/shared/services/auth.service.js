var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../api.config';
import { HttpClient } from '@angular/common/http';
import { STORAGE_KEYS } from '../storage_keys.config';
//import {JwtHelper} from 'angular2-jwt';
var AuthService = /** @class */ (function () {
    // jwtHelper : JwtHelper = new JwtHelper();
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticate = function (cred) {
        return this.http.post(API_CONFIG.baseUrl + "/login", cred, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AuthService.prototype.refreshToken = function () {
        return this.http.post(API_CONFIG.baseUrl + "/auth/refresh_token", {}, {
            observe: 'response',
            responseType: 'text'
        });
    };
    AuthService.prototype.successfulLogin = function (authorizationValue) {
        var tok = authorizationValue.substring(7);
        var user = {
            token: tok,
            email: 'a' //this.jwtHelper.decodeToken(tok).sub
        };
        this.setLocalUser(user);
    };
    AuthService.prototype.logout = function () {
        this.setLocalUser(null);
    };
    AuthService.prototype.getLocalUser = function () {
        var user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        }
        else {
            return JSON.parse(user);
        }
    };
    AuthService.prototype.setLocalUser = function (obj) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map