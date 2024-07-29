import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../../shared/module/wishitems';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }
  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'appilcation/json'
      })
    }
  }

  getWishes() {
    let options = this.getStandardOptions()
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));

  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log(`There is an issue with the client or network: ${error.error}`)
    } else {
      console.error('Server-side error: ', error.error)
    }
    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'));
  }
  addWish(wish: WishItem) {
    let option = this.getStandardOptions()
    option.headers = option.headers.set('Authorization', 'value-need-for-authorizations')
    this.http.post('assets/wishes.json', wish, option)

  }
}