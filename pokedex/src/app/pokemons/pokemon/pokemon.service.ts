import { HttpClient } from '@angular/common/http';
import { Injectable } from '../../../../node_modules/@angular/core';
import { Pokemon } from './pokemon';

const API = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';

@Injectable({ providedIn: 'root' })
export class PokemonService {

    constructor(private http: HttpClient) { }

    listPokemons() {
        return this.http.get<Pokemon[]>(API);
    }
}
