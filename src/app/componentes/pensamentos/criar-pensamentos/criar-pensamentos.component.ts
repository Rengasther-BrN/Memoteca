import { PensamentoService } from './../pensamento.service';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.scss']
})
export class CriarPensamentosComponent {
  
   formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria:['', Validators.compose([
        Validators.required,
        Validators.maxLength(3)
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {    
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamentos'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }

}
