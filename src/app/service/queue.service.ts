import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Queue } from '../queue';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private http: HttpClient) { }

  getOrdersByUserId(id: String) :Observable<Queue[]>{
    return this.http.post<Queue[]>('http://localhost:1100/getorders', id);
  }

  getMyOrders(id: String){
    return this.http.post<Queue[]>('http://localhost:1100/getmyorders', id);
  }

  addOrder(queue: Queue){
    return this.http.post('http://localhost:1100/addorder', queue);
  }

}
