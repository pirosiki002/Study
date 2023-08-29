const TITLE: string = 'speed learning TypeScript';

export function showMessage():void{
  console.log(`welcome to ${TITLE} !!`);
}

export class Util{
  static getVer(): string{
    return '1.0.3';
  }
}