import { Component, OnInit, Provider } from '@angular/core';
import { DatiService } from '../../shared/dati-service';
import { Dati } from '../../model/dati';
import { Regioni } from '../../model/regioni';
import { Province } from '../../model/province';
import { CommonModule } from '@angular/common';
import { SortPipe } from '../../shared/pipe/sort-pipe';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, SortPipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  dati:Dati[] = []
  regioni:Regioni[]= []
  province:Province[]= []

  constructor(private datiService:DatiService){}

  // get dati nazionali
  getDati(){
    this.datiService.getDati().subscribe(
      res=> {
        this.dati = res
        console.log(this.dati)
      })
  }

  //get regionali
  getDatiReg(){
    this.datiService.getDatiReg().subscribe(
      res=> {
        this.regioni = res
        console.log(this.regioni)
      })
  }

  //get provincali
  getDatiProv(){
    this.datiService.getDatiProv().subscribe(
      res=> {
        this.province = res
        console.log(this.province)
      })
  }

  ngOnInit(): void {
    this.getDati()
    this.getDatiReg()
    this.getDatiProv()
  }

}
