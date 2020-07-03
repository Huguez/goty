import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  public juegos: any[] = [];

  constructor(private db: AngularFirestore ){ }

  ngOnInit(): void {
    this.db.collection( 'goty' ).valueChanges().pipe( map( (res: Game[]) => {
      
      return res.map( ({ name, votos }) => { return { name, value: votos } } )
      // return res.map( juego => {
      //   name: juego.name,
      //   value: juego.votos   
      // })

    })).subscribe( _juegos  =>{
      // console.log( _juegos );
      this.juegos = _juegos;
    });
  }

}
