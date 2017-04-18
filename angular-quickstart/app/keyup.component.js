"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var KeyUpComponent_v4 = (function () {
    function KeyUpComponent_v4() {
        this.values = '';
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
    return KeyUpComponent_v4;
}());
KeyUpComponent_v4 = __decorate([
    Component({
        selector: 'key-up4',
        template: "\n    <input #box\n    (keyup.enter)=\"values=box.value\"\n    (blur)=\"values=box.value\">\n    <p>{{values}}</p>\n  "
    })
], KeyUpComponent_v4);
exports.KeyUpComponent_v4 = KeyUpComponent_v4;
//# sourceMappingURL=keyup.component.js.map