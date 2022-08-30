import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';
import { CadastroService } from '../cadastro/cadastro-pag/cadastro.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login!: Login;

  constructor(private router: Router, private loginService: CadastroService) {}

  ngOnInit(): void {}

  cadastrar() {
    this.router.navigate(['/login/cadastro']);
  }
  onSubmit() {
    const blackList: string[] = [
      'select ',
      'from ',
      'or ',
      'drop ',
      'having ',
      'insert ',
      'group ',
      'exec ',
      "'",
      '"',
      '--',
      '#',
    ];

    blackList.forEach((palavra) => {
      if (this.login.usuario.toLowerCase().includes(palavra)) {
        throw (
          (new Error('Dados inválidos! Há palavras suspeitas nesse formulário'),
          this.loginService.showMessage('Dados invalidos'))
        );
      }
    });
  }
}
