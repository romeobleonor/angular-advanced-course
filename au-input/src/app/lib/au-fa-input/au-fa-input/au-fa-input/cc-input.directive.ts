import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'au-fa-input input'
})
export class CcInputDirective {
  focus333 = false;
  constructor(private el: ElementRef) { 
  }

  // Hostlistner basically will listen to an event happens in the host w/c is the au-fa-input
  // it then set a value to a member variable 'focus333' which then can access using the Content Child for instance
  // @ContentChild(CcInputDirective, {static: true}) myInput: CcInputDirective
  @HostListener('focus')
  onFocus() {
    this.focus333 = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus333 = false;
  }
}

/*
  para hindi makalimutan, first mag create ka ng directive, tapus ang selector ay simple lang kung tamad ka gamitin mo diretsho yong element na tinatarget mo, for instance
  <au-fa-input>
    <input>...
  <au-fa-input>
so ang selector ng directive mo bale eh "au-fa-input input" - dahil sa selector na yan madedetec na ng directive mo yong element, ngayon pwede mo itest sa pmamagitan
ng constructor mo, i inject mo lang yong elementRef at sa native element dagdagan mo ng background like this
  el.nativeElement.backgroundColor = "red";

-- ngayon, kung gusto mo naman ng mag inject ng class right sa host mo, gamiting lang ang @HostBinding or @Hostlistener



*/
