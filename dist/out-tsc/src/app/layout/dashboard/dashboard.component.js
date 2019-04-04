var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ChamadosService } from 'src/app/shared/services/chamados.service';
var ELEMENT_DATA = [
    { codigo: 1, titulo: 'Hydrogen', data: 1.0079, status: 'H' },
    { codigo: 2, titulo: 'Helium', data: 4.0026, status: 'He' },
    { codigo: 3, titulo: 'Lithium', data: 6.941, status: 'Li' },
    { codigo: 4, titulo: 'Beryllium', data: 9.0122, status: 'Be' },
    { codigo: 5, titulo: 'Boron', data: 10.811, status: 'B' },
    { codigo: 6, titulo: 'Carbon', data: 12.0107, status: 'C' },
    { codigo: 7, titulo: 'Nitrogen', data: 14.0067, status: 'N' }
];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(chamadoService) {
        this.chamadoService = chamadoService;
        this.displayedColumns = ['codigo', 'titulo', 'data', 'status'];
        this.dataSource = ELEMENT_DATA;
        this.places = [];
    }
    DashboardComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.findAll();
        console.log(this.chamado.length);
    };
    DashboardComponent.prototype.findAll = function () {
        var _this = this;
        this.chamadoService.findAll().subscribe(function (response) {
            _this.chamado = response;
            _this.chamadosResgistrados = response.length;
        });
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [ChamadosService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map