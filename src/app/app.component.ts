import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private results: Array<{ type: string, guess: string, number: number }> =
    new Array<{ type: string, guess: string, number: number; }>();
  
  private roundResult:{type:string, guess:string, number:number} = null;
   
  public gameStopped(result:{type:string, guess:string, number:number}): void {
    this.getResults().push(result);
    this.setRoundResult(result);
  }

  public constructor() { 
  }
  
  title = 'angular-odd-even-game';

  public getResults(): Array<{ type: string, guess:string, number: number }>{
    return this.results;
  }

  public getRoundResult(): { type: string, guess: string, number: number; } {
    return this.roundResult;
  }

  public setRoundResult(roundResult: { type: string, guess: string, number: number; }): void {
    this.roundResult = roundResult;
  }
}

// 5.17.6/7/8