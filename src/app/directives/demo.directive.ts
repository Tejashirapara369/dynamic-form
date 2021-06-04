import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[DemoDirective]'
})

export class DemoDirective implements OnInit {
    constructor(private rendrer: Renderer2, private elRef: ElementRef) {

    }

    // @HostBinding('class.red-bg') isHover = true;

    // @HostListener('mouseover') onmouseXYZ(){
    //     // this.rendrer.removeClass(this.elRef.nativeElement, 'red-bg')
    //     this.isHover = false
    // }

    // @HostListener('mouseout') onmouseqwe(){
    //     // this.rendrer.addClass(this.elRef.nativeElement, 'red-bg')
    //     this.isHover = true;
    // }

    ngOnInit() {
        // this.rendrer.addClass(this.elRef.nativeElement, 'red-bg')
        // const elNode = this.rendrer.createElement('h2')
        // const textNode = this.rendrer.createText('This is title');
        // // this.rendrer.setStyle(elNode, 'color', 'white')
        // // this.rendrer.setAttribute(elNode, 'style','backgroundColor:black')
        // this.rendrer.appendChild(elNode, textNode)
        // this.rendrer.appendChild(this.elRef.nativeElement, elNode)
    }

}