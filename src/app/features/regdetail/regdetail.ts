import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatiService } from '../../shared/dati-service';
import { ActivatedRoute, Route } from '@angular/router';
import { Regioni } from '../../model/regioni';
import { Province } from '../../model/province';
import { Location } from '@angular/common';
import { Spinner } from "../spinner/spinner";

@Component({
  selector: 'app-regdetail',
  imports: [CommonModule, Spinner],
  templateUrl: './regdetail.html',
  styleUrl: './regdetail.scss',
})


export class Regdetail implements OnInit{

  id!: string
  reg!: Regioni[]
  prov!: Province[]
  prov2!: Province[]
  date: any //data attuale
  date2: any //data del giorno precedente

  constructor(private datiService:DatiService, private activatedRoute:ActivatedRoute, private location:Location){}

  ngOnInit(): void {
    this.getDetailReg()
    this.getProvDetail()
  }

  getDetailReg(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!
    this.datiService.detailReg(this.id).subscribe(res =>{
          this.reg = res.filter(t =>t.denominazione_regione === this.id);
        })
  }
  
  getProvDetail() {
    //data di oggi
    this.date = new Date().toISOString().slice(0, 10)
    //data ieri: data di oggi, -1, per 24ore, per 60ora, per 60min, per 1000mill di sec
    this.date2 = new Date(Date.now() - 1 *24 *60 *60 *1000).toISOString().slice(0, 10)

    this.id = this.activatedRoute.snapshot.paramMap.get('id')!

    this.datiService.detailProv().subscribe((res:any) => {
          //valore dell'oggetto Provincia, indice numerico, array Provincia[]
          this.prov = res.filter((t:any)=> t.denominazione_regione === this.id).filter((value:Province ,index:number, self:Province[]) => self.indexOf(value) === index)
          
         //con spread operator sovrascrivo un nuovo progetto che restituisce solo una provincia con la denominazione-provincia
          this.prov = [...new Map(this.prov.map(item =>[item[`denominazione_provincia`], item])).values()]
        //incremento dei dati provincia per provincia
          this.prov2 = res.filter((t:any)=> t.data.slice(0, 10) === this.date2).filter((t:any)=> t.denominazione_regione === Number(this.id)).filter((value:Province ,index:number, self:Province[]) =>self.indexOf(value) === index)
        })
  }

  //metodo per dimostrare esistenza di prov2
  getCasiPrecedenti(nomeProvincia: string): number { 
     let provinciaPrecedente = this.prov2.find(p => p.denominazione_provincia === nomeProvincia
  )
  
      if (provinciaPrecedente) {
         return provinciaPrecedente.totale_casi
      }
         return 0
}


  goBack(): void {
    this.location.back()
  }
}

