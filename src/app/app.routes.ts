import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Regdetail } from './features/regdetail/regdetail';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'regione/:id', component: Regdetail},
];
