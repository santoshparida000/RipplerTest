import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiService } from 'src/app/app.service';

@Injectable({
  providedIn: 'root'
})
export class DressListService {

  constructor(private apiService: ApiService) {}

  getDressList():Observable<any>{ 
    return this.apiService.get('dress/demo/list');
  }
}
