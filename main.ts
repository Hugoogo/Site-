// No arquivo src/main.ts
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Adicione isso para o [(ngModel)]
import { CommonModule } from '@angular/common'; // Adicione isso para o *ngIf
import { App } from './app/app';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // Em vez de apontar para um arquivo, escrevemos o HTML aqui dentro:
  template: `
    <div style="text-align:center; padding: 50px;">
      <h1>Site do Bolo de Aniversário 🎂</h1>
      <input [(ngModel)]="nome" placeholder="Nome">
      <p>Olá, {{ nome }}!</p>
    </div>
  `
})
export class AppComponent {
  // Variáveis que serão ligadas aos campos de entrada do HTML
  nome: string = '';
  idade: number | null = null; // Pode ser número ou nulo (se não preenchido)
  endereco: string = '';

  conviteConfirmado: boolean = false; // Estado para controlar a mensagem de sucesso

  // Função que será executada quando o botão for clicado
  confirmarConvite() {
    // Aqui você pode adicionar validações, por exemplo:
    if (!this.nome || !this.idade || !this.endereco) {
      alert('Por favor, preencha todos os campos!');
      return; // Impede a execução se algum campo estiver vazio
    }
    
    // Simula o envio dos dados para um servidor
    console.log('Convite confirmado para:');
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Endereço: ${this.endereco}`);

    // Define conviteConfirmado como true para mostrar a mensagem de sucesso
    this.conviteConfirmado = true;

    // Opcional: Limpar os campos após a confirmação
    // this.nome = '';
    // this.idade = null;
    // this.endereco = '';
    bootstrapApplication(App)
  .catch(err => console.error(err));
  }
  
}