import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/game';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  private juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados() {
    if( this.juegos.length > 0  ){
      // console.log("desde Cache");
      return of( this.juegos );
    }else{
      // console.log("desde Internet");
      return this.http.get<Game[]>( `${ environment.url }/api/goty` ).pipe( tap( _juegos => this.juegos = _juegos ) );
    }
  }

  votarJuego( id : string ){

    return this.http.post( `${ environment.url }/api/goty/${id}`, {} ).pipe( 
      catchError( err => {
        // console.log( err.error );
        return of(err.error);
      })
     )
  }
}
