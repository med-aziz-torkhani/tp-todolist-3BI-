import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  //nom du composant*directive....
  selector: '[appTodo]'
})
export class TodoDirective {

  constructor(private element: ElementRef) { }

  //host decorateur ecouter l'evenement qui se trouve dans le doc 
  //pour ajouter le box shadow 
  //quand on met le curseur sur l'activité
  @HostListener('mouseenter') onMouseEnter(){
      this.setShadow('5px 5px 10px 2px rgba(0,0,0,.5);')  
  }

  //quand je quitte le bloc
  @HostListener('mouseleave') onMouseLeave(){
    this.setShadow('none;')  
}

  setShadow(shadow : string){
    this.element.nativeElement.setAttribute('style' ,`box-shadow:${shadow}`)
    //'box-shadow : 5px 5px 10px 2px rgba(0,0,0,5')
  }

}
