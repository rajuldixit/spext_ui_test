import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerActionsComponent } from './player-actions/player-actions.component';
import { PlayerPosterComponent } from './player-poster/player-poster.component';



@NgModule({
  declarations: [PlayerActionsComponent, PlayerPosterComponent],
  exports: [PlayerActionsComponent, PlayerPosterComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
