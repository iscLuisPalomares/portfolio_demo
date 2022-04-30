import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Employee, DatagridfakeService } from '../../services/datagridfake.service';

@Component({
  selector: 'app-prod-monitor',
  templateUrl: './prod-monitor.component.html',
  styleUrls: ['./prod-monitor.component.css']
})
export class ProdMonitorComponent implements OnInit {
  orders: Order[] = [];
  base_url: string = "";
  order_detail: Partial<Order> = {};
  employees: Employee[] = [];
  // service: Partial<DatagridfakeService>;

  constructor(private http: HttpClient, @Inject('BASE_URL') base_url: string, service: DatagridfakeService) {
    this.employees = service.getEmployees();
    this.base_url = base_url;
    http.get<Order[]>(this.base_url + 'listoforders').subscribe(result => {
      console.log(result);
      this.orders = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

  openDetails(mrnum: string) {
    console.log("get details of " + mrnum);
    // this.http.get<Order>(this.base_url + `listoforders/${mrnum}`).subscribe(result => {
    //   this.order_detail = result;
    // }, error => console.error(error));

    this.http.get<Order>(this.base_url + `listoforders/${mrnum}`).subscribe({
      next: (result) => {
        this.order_detail = result;
      }, 
      error: (error) => console.error(error)
    });
  }

  openMessage() {
    alert('hey this is a message called from devexpress button');
  }

}

interface Order {
  mrNumber : string;
  sku: string; 
  status: string;
  dateCreated: Date;
  dueDate: Date;
  qty: number;
  qtyPackage: number;
  generator: string;
  startDate: Date;
  finishDate: Date;
  prodLine: number;
  approver: string;
  dateApproved: Date;
}