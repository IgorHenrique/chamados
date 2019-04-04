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
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../api.config';
var ChamadosService = /** @class */ (function () {
    function ChamadosService(http) {
        this.http = http;
    }
    ChamadosService.prototype.findAll = function () {
        return this.http.get(API_CONFIG.baseUrl + "/chamados");
    };
    ChamadosService.prototype.findById = function (id) {
        return this.http.get(API_CONFIG.baseUrl + "/chamados/" + id);
    };
    ChamadosService.prototype.insert = function (chamadoDTO) {
        return this.http.post(API_CONFIG.baseUrl + "/chamados", chamadoDTO, {
            observe: 'response',
            responseType: 'text'
        });
    };
    ChamadosService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ChamadosService);
    return ChamadosService;
}());
export { ChamadosService };
//# sourceMappingURL=chamados.service.js.map