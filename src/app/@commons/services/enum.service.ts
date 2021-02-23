import { Injectable } from '@angular/core';

@Injectable()
export class EnumService {
  public static enumToList(e: any): any[] {
    return Object.keys(e).map((value) => e[value]);
  }

  public static enumToOptions(e: any): any[] {
    return Object.keys(e).map((key: string) => {
      return {key, value: e[key]};
    });
  }
}
