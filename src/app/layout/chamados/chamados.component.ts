import { Component, OnInit } from '@angular/core';
import { ChamadosService } from 'src/app/shared/services/chamados.service';
import { Servico } from 'src/app/model/servico';
import { ServicosService } from 'src/app/shared/services/servicos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {
  servicos : Servico[];
  formGroup : FormGroup;
  constructor(public servicoService : ServicosService,
    public chamadoService : ChamadosService,
    public formBuilder : FormBuilder) {


      this.formGroup = formBuilder.group({
        titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        servico: ['', [Validators.required]],
        mensagem:['teste'],
        observacao: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        usuario: ['1', [Validators.required, Validators.email]],    
        
      });
     }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.servicoService.findAll().subscribe(response => {
      this.servicos = response;
    })
  }

  abrirChamado(){
  
   this.chamadoService.insert(this.formGroup.value).subscribe(response => {
     alert("Ok")
   })
  }

}
