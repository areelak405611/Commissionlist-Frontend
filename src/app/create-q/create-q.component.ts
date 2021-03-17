import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Queue } from '../queue';
import { QueueService } from '../service/queue.service';

@Component({
  selector: 'app-create-q',
  templateUrl: './create-q.component.html',
  styleUrls: ['./create-q.component.css']
})
export class CreateQComponent implements OnInit {

  constructor(private queueuservice: QueueService,  private router: Router) { }

  queue = new Queue;

  ngOnInit(): void {
  }

  addOrder(){
    this.queue.order_owner = localStorage.getItem('id');
    this.queueuservice.addOrder(this.queue)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });

      this.router.navigate(['/queue']);

  }

}
