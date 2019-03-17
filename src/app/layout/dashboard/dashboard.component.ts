import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ChamadosService } from 'src/app/shared/services/chamados.service';
import { Chamado } from 'src/app/model/chamados';

export interface PeriodicElement {
    titulo: string;
    codigo: number;
    data: number;
    status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { codigo: 1, titulo: 'Hydrogen', data: 1.0079, status: 'H' },
    { codigo: 2, titulo: 'Helium', data: 4.0026, status: 'He' },
    { codigo: 3, titulo: 'Lithium', data: 6.941, status: 'Li' },
    { codigo: 4, titulo: 'Beryllium', data: 9.0122, status: 'Be' },
    { codigo: 5, titulo: 'Boron', data: 10.811, status: 'B' },
    { codigo: 6, titulo: 'Carbon', data: 12.0107, status: 'C' },
    { codigo: 7, titulo: 'Nitrogen', data: 14.0067, status: 'N' }
];




@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    displayedColumns = ['codigo', 'titulo', 'data', 'status'];
    dataSource = ELEMENT_DATA;
    places: Array<any> = [];
    chamado : Chamado[];
    chamadosResgistrados : number;

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     
    }

    constructor(public chamadoService : ChamadosService) {
       }

    ngOnInit() {
        this.findAll();
        console.log(this.chamado.length);
    }

    findAll(){
        this.chamadoService.findAll().subscribe(response => {
            this.chamado = response;
            this.chamadosResgistrados = response.length;
          
        })
    }





}
