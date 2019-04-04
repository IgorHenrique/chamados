var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ChamadosService } from 'src/app/shared/services/chamados.service';
var TablesComponent = /** @class */ (function () {
    function TablesComponent(chamadoService) {
        this.chamadoService = chamadoService;
        this.displayedColumns = ['codigo', 'titulo', 'status', 'tempo'];
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.chamados);
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.findAll();
    };
    TablesComponent.prototype.findAll = function () {
        var _this = this;
        this.chamadoService.findAll().subscribe(function (response) {
            _this.chamados = response;
        });
    };
    TablesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], TablesComponent.prototype, "paginator", void 0);
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", MatSort)
    ], TablesComponent.prototype, "sort", void 0);
    TablesComponent = __decorate([
        Component({
            selector: 'app-tables',
            templateUrl: './tables.component.html',
            styleUrls: ['./tables.component.scss']
        }),
        __metadata("design:paramtypes", [ChamadosService])
    ], TablesComponent);
    return TablesComponent;
}());
export { TablesComponent };
//# sourceMappingURL=tables.component.js.map