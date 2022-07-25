import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable()
export class GlobalState {

  private API_URL: string = 'https://gateway.marvel.com/v1/public/';
  private PRIVATE_KEY: string = '***';
  private PUBLIC_KEY: string = '***';
  private TIMESTAMP: string = '***';
  private HASH: string = '';

  constructor() {
    this.HASH = this.setApiMD5();
  }

  public getApiURL(): string {
    return this.API_URL;
  }
  public getApiParams(): string {
    return `?ts=${this.TIMESTAMP}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  }

  private setApiMD5(): string {
    const md5 = new Md5();
    return md5.appendStr(this.TIMESTAMP + this.PRIVATE_KEY + this.PUBLIC_KEY).end() as string;
  }
}
