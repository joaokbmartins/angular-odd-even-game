import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html'
})

export class OddComponent {

  @Input() private guess: string = null;
  @Input() private number: number = 0;

  public getNumber(): number {
    return this.number;
  }

  public getGuess(): string {
    return this.guess;
  }
  
}