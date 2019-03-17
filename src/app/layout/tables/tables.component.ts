import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Chamado } from 'src/app/model/chamados';
import { ChamadosService } from 'src/app/shared/services/chamados.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
    displayedColumns = ['codigo', 'titulo', 'status', 'tempo'];
    dataSource: MatTableDataSource<Chamado>;
    chamados : Chamado[];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public chamadoService : ChamadosService) {
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) {
           
        }

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.chamados);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.findAll();
        
    }

    findAll(){
        this.chamadoService.findAll().subscribe(response => {
            this.chamados = response;
        })
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

export interface UserData {
    codigo: string;
    titulo: string;
    status: string;
    tempo: string;
}


