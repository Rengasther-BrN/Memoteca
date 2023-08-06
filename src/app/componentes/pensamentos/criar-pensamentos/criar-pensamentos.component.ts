import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.scss']
})
export class CriarPensamentosComponent {
  
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  criarPensamento() {
    alert('Novo pensamento')
  }

  cancelar() {
    alert('Cancelar')
  }

}
