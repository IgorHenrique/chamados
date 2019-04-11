import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChamadosService } from 'src/app/shared/services/chamados.service';
import { ChamadoDTO } from 'src/app/model/DTO/chamado.dto';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    constructor(
        private route : ActivatedRoute,
        private chamadoService : ChamadosService
    ) {}

    public chamado: any;

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.getChamado(id);
    }


    public getChamado(id: string) {
        this.chamadoService.findById(id)
            .subscribe(response => {
                this.chamado = response;
            });
    }
}
