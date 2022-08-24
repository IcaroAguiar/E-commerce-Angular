import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../../cadastro-pag/cadastro.model';
import { CadastroService } from '../../cadastro-pag/cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  cadastro!: Cadastro;




  constructor(private cadastroService: CadastroService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    const id =  +this.route.snapshot.paramMap.get('id')!
    this.cadastroService.readById(id).subscribe(cadastro => {
      this.cadastro = cadastro
    })

  }

  updateCadastro(): void{
    this.cadastroService.updateCadastro(this.cadastro).subscribe(()=>{
      this.cadastroService.showMessage('O usuario foi atualizado')
      this.router.navigate(["/cadastro/tabela"])
    })
  }

  cancelarCadastro(): void{
    this.router.navigate(['/login/cadastro'])
  }
  tabelasCadastro(): void{
  this.router.navigate(['/login/cadastro/tabela'])
}

}
