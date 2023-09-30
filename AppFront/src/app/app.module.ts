import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/layout/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { CarrusellComponent } from './components/layout/carrusell/carrusell.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CotizacionesComponent } from './components/layout/cotizaciones/cotizaciones.component';
import { ContactenosComponent } from './components/layout/contactenos/contactenos.component';
import { ServiciosComponent } from './components/layout/servicios/servicios.component';
import { SomosComponent } from './components/layout/somos/somos.component';
import { RegisterComponent } from './components/layout/register/register.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AlmacenamientoComponent } from './components/layout/servicios/almacenamiento/almacenamiento.component';
import { SeguroComponent } from './components/layout/servicios/seguro/seguro.component';
import { AduanaComponent } from './components/layout/servicios/aduana/aduana.component';
import { AereroComponent } from './components/layout/servicios/aerero/aerero.component';
import { MaritimoComponent } from './components/layout/servicios/maritimo/maritimo.component';
import { TerrestreComponent } from './components/layout/servicios/terrestre/terrestre.component';
import { OperacionesComponent } from './components/layout/operaciones/operaciones.component';
import { AddCotizacionesComponent } from './components/layout/cotizaciones/add-cotizaciones/add-cotizaciones.component';


@NgModule({
  declarations: [
    AppComponent,LoginComponent, HeaderComponent, CarrusellComponent, FooterComponent, CotizacionesComponent, ContactenosComponent, ServiciosComponent, 
    SomosComponent,RegisterComponent,NavbarComponent, AlmacenamientoComponent, SeguroComponent, AduanaComponent, AereroComponent, MaritimoComponent, TerrestreComponent, OperacionesComponent,AddCotizacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,RouterModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
