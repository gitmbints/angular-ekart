import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[AppHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = '#282828';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textColor: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white';
    this.border = '2px solid #282828';
    this.textColor = '#282828';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = '#282828';
    this.border = 'none';
    this.textColor = 'white';
  }
}
