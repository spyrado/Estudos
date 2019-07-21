import { Injectable } from '@angular/core';
import { BannerModel } from './banner.model';

@Injectable()
export class BannerService {

  constructor() {}

  buildBanners() {
    return [
      // new BannerModel()
    ]
  }
}
