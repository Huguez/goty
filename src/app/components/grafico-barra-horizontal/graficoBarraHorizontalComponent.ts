import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];
  //   "name": "eleccion 1",
  //   "value": 8940000
  // },
  // {
  //   "name": "eleccion 2",
  //   "value": 5000000
  // },
  // {
  //   "name": "eleccion 3",
  //   "value": 7200000
  // },
  // {
  //   "name": "eleccion 4",
  //   "value": 8200000
  // }];


  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Juegos";
  showYAxisLabel = true;
  yAxisLabel = "votos";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  intervalo;

  constructor() {

    // this.intervalo =  setInterval( () =>{

    //   let newResults = [...this.results];

    //   for( let i = 0; i < newResults.length; i++ ){
    //     newResults[i].value = Math.round( Math.random() * 500  );
    //   }

    //   this.results = [ ...newResults ];

    // }, 4500 );
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(){

  }
    
  ngOnDestroy(){
    // clearInterval( this.intervalo );
  }
}
