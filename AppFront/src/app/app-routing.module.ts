import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { RegisterComponent } from './components/layout/register/register.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ServiciosComponent } from './components/layout/servicios/servicios.component';
import { MaritimoComponent } from './components/layout/servicios/maritimo/maritimo.component';
import { AereroComponent } from './components/layout/servicios/aerero/aerero.component';
import { TerrestreComponent } from './components/layout/servicios/terrestre/terrestre.component';
import { SomosComponent } from './components/layout/somos/somos.component';
import { CarrusellComponent } from './components/layout/carrusell/carrusell.component';
import { CotizacionesComponent } from './components/layout/cotizaciones/cotizaciones.component';
import { loginGuard } from './guards/login.guard';
import { AddCotizacionesComponent } from './components/layout/cotizaciones/add-cotizaciones/add-cotizaciones.component';

const routes: Routes = [
  {    path: 'login',    component: LoginComponent,  },
  {    path: 'register',    component: RegisterComponent,  }, 
  {    path: 'navbar',    component: NavbarComponent,  },
  {    path: 'servicios',    component: ServiciosComponent,  },
  {    path: 'Maritimo', component: MaritimoComponent },
  {    path: 'Aereo', component: AereroComponent }, 
  {    path: 'Terrestre', component: TerrestreComponent  },
  {    path: 'somos', component: SomosComponent  },
  {    path: 'inicio', component: CarrusellComponent  },
  {    path: 'cotizaciones', component: CotizacionesComponent ,canActivate:[loginGuard] },
  {    path: 'AddCotizaciones', component: AddCotizacionesComponent ,canActivate:[loginGuard] },
  {    path: '', component: CarrusellComponent  },
  {    path: '**', component: CarrusellComponent  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
