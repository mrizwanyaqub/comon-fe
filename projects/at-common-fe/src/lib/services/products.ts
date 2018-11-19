import {Inject, Injectable} from '@angular/core';
import {Api} from "./api";
import {AtConfigs} from "./configs";

@Injectable()
export class Products {
  constructor(@Inject(AtConfigs) private configs, private api: Api) {
  }

  public async getProducts(color: string) {
    return await this.api.get(this.configs.api.products + color);
  };
}
