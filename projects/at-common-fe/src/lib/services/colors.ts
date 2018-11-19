import {Inject, Injectable} from '@angular/core';
import {Api} from "./api";
import {AtConfigs} from "./configs";

@Injectable()
export class Colors {
  constructor(@Inject(AtConfigs) private configs, private api: Api) {
  }

  public async getColors() {
    return await this.api.get(this.configs.api.colors);
  };
}
