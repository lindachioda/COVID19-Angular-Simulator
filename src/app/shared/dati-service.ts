import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dati } from '../model/dati';
import { Observable } from 'rxjs';
import { Regioni } from '../model/regioni';
import { Province } from '../model/province';

 const API = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/refs/heads/master/dati-json/dpc-covid19-ita-andamento-nazionale.json'
 const APIREG = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/refs/heads/master/dati-json/dpc-covid19-ita-regioni-latest.json'
 const APIPROV = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/refs/heads/master/dati-json/dpc-covid19-ita-province-latest.json'
 const APIREGall = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/refs/heads/master/dati-json/dpc-covid19-ita-regioni.json'
 const APIPROVall = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/refs/heads/master/dati-json/dpc-covid19-ita-province.json'

@Injectable({
  providedIn: 'root',
})
export class DatiService {

  dati:Dati[]=[]

  constructor(private http:HttpClient){}

  //get dati
  getDati(): Observable<Dati[]>{
    return this.http.get<Dati[]>(API)
  }

  //get dati regionali
  getDatiReg(): Observable<Regioni[]>{
    return this.http.get<Regioni[]>(APIREG)
  }
  
//get dati provinciali
  getDatiProv(): Observable<Province[]>{
    return this.http.get<Province[]>(APIPROV)
  }

//get DETTAGLI regioni
  detailReg(id:any): Observable<Regioni[]> {
    return this.http.get<Regioni[]>(`${APIREGall}?id=${id}`)
  }

  //get DETTAGLI province
  detailProv(): Observable<Province[]> {
    return this.http.get<Province[]>(`${APIPROVall}`)
  }

}
