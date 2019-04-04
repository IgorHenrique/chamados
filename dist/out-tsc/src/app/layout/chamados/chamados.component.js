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
import { ServicosService } from 'src/app/shared/services/servicos.service';
import { FormBuilder, Validators } from '@angular/forms';
var ChamadosComponent = /** @class */ (function () {
    function ChamadosComponent(servicoService, chamadoService, formBuilder) {
        this.servicoService = servicoService;
        this.chamadoService = chamadoService;
        this.formBuilder = formBuilder;
        this.formGroup = formBuilder.group({
            titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
            servico: ['', [Validators.required]],
            mensagem: ['teste'],
            observacao: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
            usuario: ['1', [Validators.required, Validators.email]],
        });
    }
    ChamadosComponent.prototype.ngOnInit = function () {
        this.findAll();
    };
    ChamadosComponent.prototype.findAll = function () {
        var _this = this;
        this.servicoService.findAll().subscribe(function (response) {
            _this.servicos = response;
        });
    };
    ChamadosComponent.prototype.abrirChamado = function () {
        this.chamadoService.insert(this.formGroup.value).subscribe(function (response) {
            alert("Ok");
        });
    };
    ChamadosComponent = __decorate([
        Component({
            selector: 'app-chamados',
            templateUrl: './chamados.component.html',
            styleUrls: ['./chamados.component.scss']
        }),
        __metadata("design:paramtypes", [ServicosService,
            ChamadosService,
            FormBuilder])
    ], ChamadosComponent);
    return ChamadosComponent;
}());
export { ChamadosComponent };
//# sourceMappingURL=chamados.component.js.map