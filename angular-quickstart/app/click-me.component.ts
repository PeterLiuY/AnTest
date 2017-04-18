import { Component } from '@angular/core'

@Component({
    selector: 'click-me',
    template: `
      <button (click)="onClickMe()">点我！</button>
    `
})

export class ClickMeComponent {
  clickMessage='';
  onClickMe() {
    this.clickMessage = '菜鸟教程';
  }
}
