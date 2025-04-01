import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  orders: any[] = [];
  statuses: string[] = ['pending', 'completed', 'canceled', 'delivered'];
  objectKeys = Object.keys;

  constructor(private cart: CartService) {
    this.cart.getOrders().subscribe((data) => {
      console.log('Orders data:', data); 
      
      if (Array.isArray(data)) {
        this.orders = data.map(order => ({
          ...order,
          totalPrice: Math.round(order.items?.reduce((total: number, item: any) => total + (item.price * item.mennyiseg), 0) || 0)
        }));
      } else {
        this.orders = Object.entries(data).map(([key, value]: [string, any]) => ({
          key,
          email: value.email,
          items: value.items?.map((item: any) => ({
            name: item.name,
            mennyiseg: item.mennyiseg,
            price: Math.round(item.price)
          })),
          totalPrice: Math.round(value.items?.reduce((total: number, item: any) => total + (item.price * item.mennyiseg), 0) || 0), 
          status: value.status,
          phoneNumber: value.telephonenumber
        }));
      }
    });
  }

  deleteOrder(index: number): void {
    this.orders.splice(index, 1);
  }

  updateOrderStatus(index: number, newStatus: string): void {
    const orderKey = this.orders[index].key;
    this.cart.updateOrderStatus(orderKey, newStatus)
      .then(() => {
        console.log(`Order ${orderKey} status updated to ${newStatus}`);
      })
      .catch(error => {
        console.error('Error updating order status:', error);
      });
  }
}









// import { Component } from '@angular/core';
// import { CartService } from '../services/cart/cart.service';

// @Component({
//   selector: 'app-orders-list',
//   templateUrl: './orders-list.component.html',
//   styleUrls: ['./orders-list.component.css']
// })
// export class OrdersListComponent {
//   orders: any[] = [];
//   statuses: string[] = ['pending', 'completed', 'canceled', 'delivered'];
//   objectKeys = Object.keys;

//   constructor(private cart: CartService) {
//     this.cart.getOrders().subscribe((data) => {
//       console.log('Orders data:', data); 
      
//       if (Array.isArray(data)) {
//         this.orders = data.map(order => ({
//           ...order,
//           totalPrice: Math.round(order.items?.reduce((total: number, item: any) => total + (item.price * item.mennyiseg), 0) || 0)
//         }));
//       } else {
//         this.orders = Object.entries(data).map(([key, value]: [string, any]) => ({
//           key,
//           email: value.email,
//           items: value.items?.map((item: any) => ({
//             name: item.name,
//             mennyiseg: item.mennyiseg,
//             price: Math.round(item.price)
//           })),
//           totalPrice: Math.round(value.items?.reduce((total: number, item: any) => total + (item.price * item.mennyiseg), 0) || 0), 
//           status: value.status,
//           phoneNumber: value.telephonenumber
//         }));
//       }
//     });
//   }

//   deleteOrder(index: number): void {
//     this.orders.splice(index, 1);
//   }

//   updateOrderStatus(index: number, newStatus: string): void {
//     const orderKey = this.orders[index].key;
//     this.cart.updateOrderStatus(orderKey, newStatus)
//       .then(() => {
//         console.log(`Order ${orderKey} status updated to ${newStatus}`);
//       })
//       .catch(error => {
//         console.error('Error updating order status:', error);
//       });
//   }
// }