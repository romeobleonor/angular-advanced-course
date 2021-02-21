import { ThrowStmt } from '@angular/compiler';
import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { CcInputDirective } from './cc-input.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string;
  @Input() placeholder = "";

  @ContentChild(CcInputDirective, {static: true}) myInput333: CcInputDirective;

  get classes() {
    const val = `fa-${this.icon}`;

    const cssClasses = {
    }
    if(this.icon) {
      cssClasses[`fa-${this.icon}`] = true;
    }
    return cssClasses;
  }

  constructor() { }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.myInput333 ? this.myInput333.focus333 : false;
  }

  ngAfterContentInit(): void {
    if(!this.myInput333) {
      throw "naka limutan mo mag lagay in input element dito - kase youn and requirement ng directive"
    }
    console.log(this.myInput333);
  }

  ngOnInit() {
  }

}
