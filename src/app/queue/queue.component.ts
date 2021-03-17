import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanageService } from '../service/usermanage.service';
import { User } from '../user';
import { Queue } from '../queue';
import { QueueService } from '../service/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {


  queues: Queue[];
  aa : String[];

  constructor(private service: UsermanageService,private q_service: QueueService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveQueue();
  }

  id = localStorage.getItem('id');

  retrieveQueue() {
    this.q_service.getOrdersByUserId(this.id)
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
