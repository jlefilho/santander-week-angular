import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {
	private apiURL = env.API_URL

  constructor(private http: HttpClient) {	}

	getCard(): Observable<any> {
		return this.http.get<any>(this.apiURL)
	}
}
