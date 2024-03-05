import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
@Component({
  selector: 'app-ver-mascota',
  standalone: true,
  imports: [SharedModule,RouterLink],
  templateUrl: './ver-mascota.component.html',
  styleUrl: './ver-mascota.component.css'
})
export class VerMascotaComponent {

}
