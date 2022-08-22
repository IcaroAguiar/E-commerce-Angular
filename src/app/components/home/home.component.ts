import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  slides = document.getElementById("#slide1")!
  
  ngOnInit(): void {

   setInterval(slideshow, 3000)
   let contagem: number = 0
   function slideshow(){
    contagem++
    if (contagem == 1) {
      $("#slide1").show();
      $("#slide2").hide();
      $("#slide3").hide();
    } else if(contagem == 2){
      $("#slide1").hide();
      $("#slide2").show();
      $("#slide3").hide();
    } else if(contagem == 3){
      $("#slide1").hide();
      $("#slide2").hide();
      $("#slide3").show();
      contagem = 0;
    }


   }

  }
  
  
 

  nome = document.getElementById('#nome')!;
  email = document.getElementById('#email')!;

  pegaDados() {
    if (this.nome == null || this.email == null) {
      alert('ERRO 401! BAD REQUEST! INSIRA OS DADOS CORRETAMENTE');
    } else {
      alert(
        'Parabéns! Nome e e-mail cadastrados. Nome: ' +
          this.nome +
          ' Email:  ' +
          this.email
      );
    }
  }
}



