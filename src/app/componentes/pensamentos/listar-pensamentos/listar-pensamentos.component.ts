import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent {
  
  listaPensamentos = [
    {
      conteudo: 'I love HTML',
      autoria: 'Nay',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3'
    }

  ];

}
