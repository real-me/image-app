import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[repeat]'
})
export class RepeatDirective {

  @Output() repeatRendered = new EventEmitter();

  @Input()
  set repeat(completed: boolean) {
    completed&&this.repeatRendered.emit(null);
  }

  constructor() {
  }

}
