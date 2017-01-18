import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonToArray'
})
export class ConvertJsonToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(value === null || value === undefined) {
        return null;
    }

    let keyArr: any[] = Object.keys(value),
        dataArr = [],
        keyName = null;

    if (args !== null && args !== undefined){
        keyName = args.toString();
    }

    keyArr.forEach((key: any) => {
        //value[key][keyName] = key;
        if(key === keyName || keyName === null) {
            dataArr.push(value[key])
        }
    });

    /*if(args[1]) {
        dataArr.sort((a: Object, b: Object): number => {
            return a[keyName] > b[keyName] ? 1 : -1;
        });
    }*/

    return dataArr;
  }
}
