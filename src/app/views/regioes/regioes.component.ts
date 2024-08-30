import { Component, OnInit } from '@angular/core';
import { CapaRegioesComponent } from "../../components/capa-regioes/capa-regioes.component";
import { Regiao } from '../../models/regioao.model';
import { PokemonService } from '../../services/pokemons.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-regioes',
  standalone: true,
  imports: [CapaRegioesComponent, NgFor],
  templateUrl: './regioes.component.html',
  styleUrl: './regioes.component.scss'
})
export class RegioesComponent {
  regioes: Regiao[] = []
  constructor(private pokemonServices: PokemonService){}

  ngOnInit():void {
    this.pokemonServices.getRegioes().subscribe(
      (data: Regiao[])=>{
        this.regioes = data;
        console.log(this.regioes);
      },
      (error)=>{
        console.error('Erro ao buscar regões', error)
      }
    )
  }

}
