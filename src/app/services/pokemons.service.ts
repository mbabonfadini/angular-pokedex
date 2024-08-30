import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Regiao } from '../models/regioao.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

   }

   getRegioes():Observable<Regiao[]> {

      return this.http.get<Regiao[]>('https://pokeapi.co/api/v2/region')
        .pipe(
          map( (response:any) => response.results.map((regiao:any) => new Regiao(regiao.name,
            regiao.url,
            parseInt(regiao.url.split('/').filter(Boolean).pop(),10)))))

  }
}
