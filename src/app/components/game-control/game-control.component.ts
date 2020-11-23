import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html'
})

export class GameControlComponent {

  private guess: string = null;
  private result: string = null;
  private action: string = 'Start';
  private timer = null;
  private counter: number = 0;
  
  @Output()
  private gameStopped: EventEmitter<{ type: string, guess: string, number: number }> =
    new EventEmitter<{ type: string, guess: string, number: number }>();

  public onGameStop():void {
    this.gameStopped.emit(
      {
        type: this.getResult(),
        guess: this.getGuess(),
        number: this.counter
      }
    );
  }
  
  public switchAction(): void {
    switch (this.getAction()) {
      case 'Start':
        this.setAction('Stop');
        this.counter = 0;
        this.result = null;
        this.startTimer();
        break;
      case 'Stop':
        this.setAction('Start');
        this.stopTimer();
        this.checkResult();
        break;
    }
  }
  
  private startTimer(): void {
    this.timer = setInterval(() => {
      // this.counter++;
      this.counter = Math.floor(Math.random()*100);
      console.log(this.counter);
    }, 100);
  }

  private stopTimer(): void {
    clearInterval(this.timer);
  }

  private checkResult(): void {
    if (this.counter % 2 != 0) {
      this.setResult('Odd');
    } else {
      this.setResult('Even');
    }
    this.onGameStop();
  }

  public getGuess():string {
    return this.guess;
  }

  public setGuess(guess: string): void {
    this.guess = guess;
  }

  public getResult():string {
    return this.result;
  }

  public setResult(result: string): void {
    this.result = result;
  }

  public getAction():string {
    return this.action;
  }

  public setAction(action: string): void {
    this.action = action;
  }

  public getCounter():number {
    return this.counter;
  }

  public setCounter(counter: number): void {
    this.counter = counter;
  }

}