import { Routes } from '@angular/router';
//Components
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

export const routes: Routes = [
    {path:'', redirectTo: 'listMascotas', pathMatch:'full'},
    {path:'listMascotas', component: ListadoMascotaComponent},
    {path:'agregarMascotas', component: AgregarEditarMascotaComponent},
    {path:'verMascotas/:id', component: VerMascotaComponent},
    {path:'editarMascotas/:id', component: AgregarEditarMascotaComponent},
    //redirecciones paginas que no existen
    {path:'**', redirectTo: 'listMascotas', pathMatch:'full'},
];
