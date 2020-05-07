import {Inject, Injectable, InjectionToken} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'pure-awesomeness';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class StoredDataService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {

  }

   saveProducts(product) {
     products: [] = this.storage.get(STORAGE_KEY);
     this.storage.set(STORAGE_KEY, product);
     // return product;
  }
}
