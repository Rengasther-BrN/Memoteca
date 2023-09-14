import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent {
    
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true;
  filtro: string = ''
  favoritos: boolean = false
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu Mural'

  constructor(
    private service: PensamentoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPesamentos) => {
      this.listaPensamentos = listaPesamentos
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this. filtro, this.favoritos) 
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if(!this.listaPensamentos.length){
          this.haMaisPensamentos = false
        }
      })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

  recarregarComponente() {
    this.favoritos = false
    this.paginaAtual = 1
    // essas 2 linhas abaixo estao deprecadas utilizei esse metodo: https://cursos.alura.com.br/forum/topico-duvida-routereusestrategy-e-onsameurlnavigation-deprecated-273967
        //this.router.routeReuseStrategy.shouldReuseRoute = () => false
        //this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentosFavoritos => {
      this.listaPensamentos = listaPensamentosFavoritos
      this.listaFavoritos = listaPensamentosFavoritos
    })

  }

}
