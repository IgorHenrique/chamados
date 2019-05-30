import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChamadosService } from 'src/app/shared/services/chamados.service';
import { ChamadoDTO } from 'src/app/model/DTO/chamado.dto';
import { MensagensService } from 'src/app/shared/services/mensagens.service';
import { Mensagem } from 'src/app/model/mensagens';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    
    constructor(
        private route : ActivatedRoute,
        private chamadoService : ChamadosService,
        private mensagemService : MensagensService,
        private router : Router
    ) {
        let id = this.route.snapshot.params['id'];
        this.getChamado(id);
        
    }

    public chamado: any;
    public mensagem: string;
    public mensagens = new Array<any>();
    ngOnInit() {
        
        this.getMensagens(this.chamado);
        console.log('teste')
    }


    public getChamado(id: string) {
        this.chamadoService.findById(id)
            .subscribe(response => {
                this.chamado = response;
                this.getMensagens(response);
                
            });
    }

    public resolver(chamado) {
        this.chamadoService.finalizar(chamado)
        .subscribe(response => {
            this.router.navigate(['/inicio']);
        });
    }

    public enviarMensagem(chamado) {
        let msg : Mensagem = new Mensagem();
        msg.mensagem = this.mensagem;
        msg.chamado = chamado;

        this.mensagemService.insertMensagem(msg).subscribe(resp => {
            this.mensagens.push(resp);
            console.log(this.mensagens);
        });

        
    }

    public getMensagens(chamado) {
        this.mensagemService.getMensagem(chamado)
                .subscribe(msgs => {
                    this.mensagens = this.mensagens.concat(msgs);
                console.log(this.mensagens);
                })
    }
}
