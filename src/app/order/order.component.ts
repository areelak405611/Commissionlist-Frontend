import { Component, OnInit } from '@angular/core';
import { Queue } from '../queue';
import { QueueService } from '../service/queue.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private queueservice: QueueService) { }

  ngOnInit(): void {
    this.getMyOrder();
  }

  queues: Queue[];

  id = localStorage.getItem('id');

  getMyOrder(){
    this.queueservice.getMyOrders(this.id)
    .subscribe(
       data => {
         this.queues = data;
         console.log(data);
       },
       error => {
         console.log(error);
       });
  }

}
