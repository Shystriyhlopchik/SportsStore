import {Component} from '@angular/core';
import {OrderRepository} from '../model/order.repository';
import {Order} from '../model/order.model';
import {NgForm} from "@angular/forms";

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public repository: OrderRepository,
              public order: Order) { }
  // Данный метод вызывается при отправке данных формой
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) { // если валидация прошла учешно Order передается saveOrder()
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear(); // данные в корзине и заказе сбрасываются
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
