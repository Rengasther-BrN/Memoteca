import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { CustomReuseStrategy } from './componentes/pensamentos/custom-reuse-estrategy';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarPensamentos',
        pathMatch: 'full'
    },
    {
        path: 'criarPensamentos',
        component: CriarPensamentosComponent
    },
    {
        path: 'listarPensamentos',
        component: ListarPensamentosComponent,
        data: {
            reuseComponent: true
          }
    },
    {
        path: 'pensamentos/excluirPensamento/:id',
        component: ExcluirPensamentoComponent
    },
    {
        path: 'pensamentos/editarPensamento/:id',
        component: EditarPensamentoComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
})

export class AppRoutingModule { }
