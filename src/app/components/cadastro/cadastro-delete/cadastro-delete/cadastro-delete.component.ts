import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../../cadastro-pag/cadastro.model';
import { CadastroService } from '../../cadastro-pag/cadastro.service';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

  cadastro!: Cadastro;




  constructor(private router: Router, private cadastroService: CadastroService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cadastroService.readById(id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    })
  }

  deleteCadastro(): void{
    
    this.cadastroService.deleteCadastro(this.cadastro.id!).subscribe(() => {
      this.router.navigate(['login/cadastro/tabela'])
      this.cadastroService.showMessage('Cadastro Deletado')
    })
  }
  cancelarCadastro(): void{
    this.router.navigate(['login/cadastro/tabela'])
  }

}
