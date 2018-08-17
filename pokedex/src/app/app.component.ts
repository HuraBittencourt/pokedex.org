import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemons/pokemon/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService
      .listPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
  }
}
