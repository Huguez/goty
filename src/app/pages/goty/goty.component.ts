import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game';
import swal from'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  public juegos : Game[] = [];


  constructor(private _gs: GameService) { }

  ngOnInit(): void {
    this._gs.getNominados().subscribe( _juegos => {
      // console.log( _juegos );
      this.juegos = _juegos;
    });
  }
  
  votarJuego( game:Game ){
    // console.log( game );
    this._gs.votarJuego( game.id ).subscribe( resp => { 
      if( resp.ok ){
        swal.fire('Gracias', 'votaste por ' + game.name, 'success' );
      }else{
        swal.fire( "Oops mf!", resp.mensaje, 'error' );
      }
    });
  }

}
