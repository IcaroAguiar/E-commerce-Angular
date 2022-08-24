import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../../cadastro-pag/cadastro.model';
import { CadastroService } from '../../cadastro-pag/cadastro.service';


@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadastros!: Cadastro[];
  displayedColumns = ['id', 'usuario', 'senha', 'action']

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastroService.read().subscribe(cadastros => {
      this.cadastros = cadastros
      this.cadastroService.showMessage('Tabela Gerada');
    })

  }

}
