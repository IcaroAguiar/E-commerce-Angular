import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';
import { Cadastro } from '../cadastro.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro-pag.component.html',
  styleUrls: ['./cadastro-pag.component.css']
})
export class CadastroComponent implements OnInit {


  cadastro: Cadastro = {
    usuario: '',
    senha: ''
  }


  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }

  createCadastro(){
    this.cadastroService.create(this.cadastro).subscribe(() => {
      this.router.navigate(['login'])
      this.cadastroService.showMessage('Usuario Cadastrado')
    })
  }

  cancelarCadastro(): void{
    this.router.navigate([''])
  }

  tabelaCadastro():void{
    this.router.navigate(['login/cadastro/tabela'])
  }
}
