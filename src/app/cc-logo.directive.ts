import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCcLogo]'
})
export class CcLogoDirective {
  constructor() { console.log ('in directive constructor')}
  @HostBinding('src') imageSrc
  @HostBinding('hidden') isHidden:boolean
  @Input() ccNumber: string = ""

  getCCType() : string {
    if(this.ccNumber.startsWith("4")) {
      return "visa"
    } else if(this.ccNumber.startsWith("5")) {
      return "mastercard"
    } else if(this.ccNumber.startsWith("3")) {
      return "amex"
    }
    return undefined
  }

  ngOnChanges() {
    console.log('in on change')
    const ccType = this.getCCType()
    console.log('ccType '+ccType);
    console.log('$ccType '+`${ccType}`);
    this.isHidden = ccType == undefined
    this.imageSrc = `assets/${ccType}.png`
  }
}
