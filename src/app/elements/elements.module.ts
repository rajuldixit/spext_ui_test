import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioTrackerComponent } from './audio-tracker/audio-tracker.component';



@NgModule({
  declarations: [AudioTrackerComponent],
  imports: [
    CommonModule
  ],
  exports: [AudioTrackerComponent]
})
export class ElementsModule { }
