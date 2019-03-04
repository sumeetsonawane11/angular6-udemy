import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //Binding the class property with the 'open' class
  @HostBinding('class.open') isOpen = false; 
  @HostListener('click') tooggleOpen(){
     this.isOpen = !this.isOpen;
  }
  constructor() { }

}
