import { Component } from '@angular/core';
import { Mesas } from './modelos/mesas';
import { MesasService } from './servicios/mesas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mesasArray:Mesas[] = [
    {idmesa:1,cant_inscritos:24},
    {idmesa:2,cant_inscritos:16},
    {idmesa:3,cant_inscritos:18},
    {idmesa:4,cant_inscritos:11}
  ];
  constructor(private mesasService:MesasService) {

  }

  ngOnInit(): void{
    this.mesasService.getMesas()
    .subscribe(data =>{
      console.log(data);
      this.mesasArray=data;
    },
    );
  }
  selectedMesas: Mesas = new Mesas();
  seleccionar(mesas:Mesas){
    this.selectedMesas= mesas;
  }

  actualizar(){
    this.selectedMesas=new Mesas();
    this.mesasArray.push(this.selectedMesas);
    alert('mesa actualizada');
  }

  edit(mesas:Mesas){
      this.selectedMesas= mesas;
  }

  nuevo(){
    //this.selectedMesas.idmesa = this.mesasArray.length+1;
  }
  delete(mesa:Mesas):void{
    this.mesasService.eliminarMesas(mesa.idmesa).subscribe(
      res=>this.mesasService.getMesas().subscribe(
        response=>this.mesasArray=response
        )
    ); 
  }

}
