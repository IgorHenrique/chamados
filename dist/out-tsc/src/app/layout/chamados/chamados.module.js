var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadosComponent } from './chamados.component';
import { MatCardModule, MatGridListModule, MatSliderModule, MatSelectModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatRadioModule, MatCheckboxModule, MatInputModule, MatSlideToggleModule, MatAutocompleteModule, MatButtonModule } from '@angular/material';
import { ChamadosRoutingModule } from './chamados-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
var ChamadosModule = /** @class */ (function () {
    function ChamadosModule() {
    }
    ChamadosModule = __decorate([
        NgModule({
            declarations: [ChamadosComponent],
            imports: [
                CommonModule,
                ChamadosRoutingModule,
                MatCardModule,
                MatGridListModule,
                MatAutocompleteModule,
                FormsModule,
                ReactiveFormsModule,
                MatSlideToggleModule,
                MatInputModule,
                MatCardModule,
                MatCheckboxModule,
                MatRadioModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatFormFieldModule,
                MatSelectModule,
                MatButtonModule,
                MatSliderModule,
                MaterialComponentsModule,
                FlexLayoutModule.withConfig({ addFlexToParent: false })
            ]
        })
    ], ChamadosModule);
    return ChamadosModule;
}());
export { ChamadosModule };
//# sourceMappingURL=chamados.module.js.map