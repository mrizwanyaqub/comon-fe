import { ModuleWithProviders, NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Api, Colors, Products } from './services';
import { AtConfigs } from './services/configs';
import { IConfigs } from './models';
import { authInterceptor } from "./interceptors";

@NgModule(
)
export class AtProvidersModule {
  static forRoot(configs: IConfigs): ModuleWithProviders {
    return {
      ngModule:AtProvidersModule,
      providers: [
        {
          provide: AtConfigs,
          useValue: configs
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: authInterceptor,
          multi: true
        },
        Api,
        Colors,
        Products
      ]
    };
  }
}
