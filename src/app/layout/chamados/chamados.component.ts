import { Component, OnInit } from '@angular/core';
import { ChamadosService } from 'src/app/shared/services/chamados.service';
import { Servico } from 'src/app/model/servico';
import { ServicosService } from 'src/app/shared/services/servicos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {
  public isLoading: boolean;
  servicos : Servico[];
  formGroup : FormGroup;
  titulo: string;
  observacao: string;
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

  lerArquivo(event) {
    if (event.target.files && event.target.files[0]) {
      const arquivo = event.target.files[0];

      var reader = new FileReader();
      reader.onload = (event) => {
        let parse = new DOMParser();
        let arquivoXml = parse.parseFromString(event.target.result, "text/xml");
        let problema = arquivoXml.getElementsByTagName("PROBLEMA")[0];
        let observacao = arquivoXml.getElementsByTagName("OBSERVACAO")[0]; 
        this.titulo = problema ? problema.innerHTML : "";
        this.observacao = observacao ? observacao.innerHTML : "";
  
      }
      reader.readAsText(arquivo);
    }
  }

  teste() {}

}
