import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectbox'
})
export class SelectboxPipe implements PipeTransform {

  transform(opt: any, sel?: any): any {
    console.log('sel', sel);
    return (opt || opt === '0') ? opt.filter(sal => { return sal == sel }) : opt;
  }

}
