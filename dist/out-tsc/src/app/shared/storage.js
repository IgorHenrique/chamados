var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from './storage_keys.config';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider() {
    }
    StorageProvider.prototype.getLocalUser = function () {
        var user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        }
        else {
            return JSON.parse(user);
        }
    };
    StorageProvider.prototype.setLocalUser = function (obj) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    };
    StorageProvider = __decorate([
        Injectable()
    ], StorageProvider);
    return StorageProvider;
}());
export { StorageProvider };
//# sourceMappingURL=storage.js.map