import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PokemonComponent
  ],
  declarations: [PokemonComponent]
})
export class PokemonsModule { }
