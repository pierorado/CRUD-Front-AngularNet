import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Mascota } from '../../interfaces/mascota';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  imports: [MatTableModule,MatPaginatorModule, MatSortModule,MatInputModule,MatFormFieldModule],
  templateUrl: './listado-mascota.component.html',
  styleUrl: './listado-mascota.component.css'
})
export class ListadoMascotaComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad','raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
}
