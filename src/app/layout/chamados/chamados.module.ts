import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadosComponent } from './chamados.component';
import { MatCardModule, MatGridListModule, MatSliderModule, MatSelectModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatRadioModule, MatCheckboxModule, MatInputModule, MatSlideToggleModule, MatAutocompleteModule, MatButtonModule } from '@angular/material';
import { ChamadosRoutingModule } from './chamados-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
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
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class ChamadosModule { }
