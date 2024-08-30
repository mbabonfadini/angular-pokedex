const regioes: any[] = [
  { id: 1, url: 'assets/capa-kanto.png' },
  { id: 2, url: 'assets/capa-johto.png' },
  { id: 3, url: 'assets/capa-hoenn.png' },
  { id: 4, url: 'assets/capa-sinnoh.png' },
  { id: 5, url: 'assets/capa-unova.png' },
  { id: 6, url: 'assets/capa-kalos.png' },
  { id: 7, url: 'assets/capa-alola.png' },
  { id: 8, url: 'assets/capa-galar.png' },
  { id: 9, url: 'assets/capa-kanto.png' },
  { id: 10, url: 'assets/capa-kanto.png' },
];

export class Regiao {
  title: string;
  land: string;
  id: number;

  constructor(title: string, land: string, id: number) {
    this.title = title;
    this.land = land;
    this.id = id;
  }

  getCapa(): string {
    return regioes.find((value) => value.id === this.id)?.url;
  }
}
