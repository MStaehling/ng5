import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();
  // itemCount: number;

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
    // this.itemCount = this.goals.length;
  }

}
