import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatFormField, MatInputModule, MatGridListModule, MatAutocompleteModule, MatSlideToggleModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatSliderModule } from '@angular/material';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../material-components/material-components.module';

@NgModule({
    imports: [
        CommonModule,
        GridRoutingModule,
        MatCardModule,
      
        MatInputModule,
        FormsModule,   
        ReactiveFormsModule, 
   
        MatAutocompleteModule,
        MatSlideToggleModule,
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
    ],
    declarations: [GridComponent]
})
export class GridModule {}
