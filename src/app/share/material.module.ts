import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardContent } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
   MatCardModule,
   FormsModule,
   MatFormFieldModule,
  ]
})
export class MaterialModule { }
