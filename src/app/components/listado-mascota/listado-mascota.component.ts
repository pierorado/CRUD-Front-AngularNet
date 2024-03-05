import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatSnackBar } from '@angular/material/snack-bar';


const listMascotas: Mascota[] = [
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color: 'Dorado', peso: 13},
  {nombre: 'Milton', edad: 6, raza: 'Golden', color: 'Dorado', peso: 44},
  {nombre: 'Bartolo', edad: 4, raza: 'Dogo', color: 'Negro', peso: 45},
  {nombre: 'Aquiles', edad: 2, raza: 'Ovejero', color: 'Negro', peso: 20},
  {nombre: 'Homero', edad: 1, raza: 'Labrador', color: 'Dorado', peso: 67},
  {nombre: 'Mark', edad: 1, raza: 'Callejero', color: 'Negro', peso: 58}
];
@Component({
  selector: 'app-listado-mascota',
  standalone: true,
  imports: [SharedModule,RouterLink,SpinnerComponent],
  templateUrl: './listado-mascota.component.html',
  styleUrl: './listado-mascota.component.css'
})
export class ListadoMascotaComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad','raza', 'color', 'peso','acciones'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  loading: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  eliminarMascotas(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('La Mascota fue eliminada con exito','',{
        duration: 4000,
        horizontalPosition:'right'
        
      });
    }, 3000);


    
  }
}
