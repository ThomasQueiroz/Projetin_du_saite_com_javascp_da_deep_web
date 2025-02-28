import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt)

@Component({
  selector: 'app-imovel-detalhes',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './imovel-detalhes.component.html',
  styleUrl: './imovel-detalhes.component.css'
})
export class ImovelDetalhesComponent {

  imovel: Imovel | undefined
  valorImovel = ""

  constructor(
    private imvServise: ImovelService,
    private route: ActivatedRoute,
    private rt: Router
  ){
    const id = this.route.snapshot.params["id"]
    this.imovel = this.imvServise.bucarImovelPeloid(id)
    if (this.imovel) {
      this.valorImovel = this.formatCurrency(this.imovel.valor)
    }
  }
  abrirPaginaAluguel() {
    const url = `/detalhes/${this.imovel?.id}/aluguel`
    this.rt.navigate([url])
  }
  abrirPaginaFinanciamento() {
    const url = `/detalhes/${this.imovel?.id}/financiamento`
    this.rt.navigate([url])
  }
  voltarInicio(){
    this.rt.navigate(["/"])
  }
  formatCurrency(value: number): string {
    if (value === undefined || value === null) return ''
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  }
  
