import { Component, OnInit } from '@angular/core';
import { ChamadosService } from 'src/app/shared/services/chamados.service';
import { Servico } from 'src/app/model/servico';
import { ServicosService } from 'src/app/shared/services/servicos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {
  public isLoading: boolean;
  servicos : Servico[];
  formGroup : FormGroup;
  constructor(public servicoService : ServicosService,
    public chamadoService : ChamadosService,
    public formBuilder : FormBuilder,
    private router : Router) {
      this.formGroup = formBuilder.group({
        titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        servico: ['', [Validators.required]],
        observacao: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        usuario: ['1', [Validators.required]],    
        
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
    if(!this.formGroup.invalid) {
        this.isLoading = true;
        this.chamadoService.insert(this.formGroup.value).subscribe(response => {
        this.isLoading = false;
        this.router.navigate(['/inicio']);
      })
    }
  }

}
