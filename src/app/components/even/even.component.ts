import { Component } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component ({
  selector: 'app-even',
  templateUrl:'./even.component.html'
})

export class EvenComponent {

  private guess: string = null;
  private result: string = null;
  private action: string = 'Start';

  private timer = null;
  private counter:number = 0;

  
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
      this.counter++;
      console.log(this.counter);
    }, 100);
  }

  private stopTimer(): void {
    clearInterval(this.timer);
  }

  private checkResult(): void {
    if (this.counter % 2 == 0) {
      this.setResult('Odd');
    } else {
      this.setResult('Even');
    }
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

}