@Component({
  selector: 'key-up4',
  template: `
    <input #box
    (keyup.enter)="values=box.value"
    (blur)="values=box.value">
    <p>{{values}}</p>
  `
  })

  export class KeyUpComponent_v4 {
    values='';

    /*
  // 非强类型
  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }

  // 强类型
    onKey(event: KeyboardEvent) {
      this.values +=value+'|';
    }
    */
  }
