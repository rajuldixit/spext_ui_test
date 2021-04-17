import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [PlayerComponent],
  exports: [PlayerComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
