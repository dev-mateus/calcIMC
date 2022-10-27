import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  altura : string
  peso : string
  opcao : string
  resultado : string
  mensagem : string
  imagem : any = "assets/icon/favicon.png"

  constructor() {}
  
  calcIMC(){
    
    var altura = parseFloat(this.altura)
    var peso = parseFloat(this.peso)
    var opcao = this.opcao
    var resultado = parseFloat(this.resultado)

    if(opcao == "f"){
      resultado = peso / altura**2
      this.resultado = resultado.toFixed(1)
      
      if(resultado <= 19){
        this.mensagem = "ABAIXO DO PESO"
        this.imagem = "assets/icon/favicon.png"        
      }
      else if (resultado > 19 && resultado <= 27.3){
        this.mensagem = "PESO NORMAL"
        this.imagem = "assets/icon/favicon.png"
      }
      else{
        this.mensagem = "ACIMA DO PESO"
        this.imagem = "assets/alerta.png"
      }

    }
    
    else if (opcao == "m"){
      resultado = peso / altura**2
      this.resultado = resultado.toFixed(1)
      
      if(resultado <=20.7){
        this.mensagem = "ABAIXO DO PESO"
        this.imagem = "assets/icon/favicon.png"
      }
      else if(resultado > 20.7 && resultado <=27.8){
        this.mensagem = "PESO NORMAL"
        this.imagem = "assets/icon/favicon.png"
      }
      else{
        this.mensagem = "ACIMA DO PESO"
        this.imagem = "assets/alerta.png"
      }
      
    }
    else if(opcao == null) {
      this.mensagem = "Escolha o sexo"
      this.imagem = "assets/icon/favicon.png"
    }
  }

}
