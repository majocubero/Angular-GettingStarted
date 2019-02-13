import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarComponent} from './star.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipePipe} from '../pipes/convert-to-spaces-pipe.pipe';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipePipe],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipePipe
  ]
})
export class StarsModule { }
