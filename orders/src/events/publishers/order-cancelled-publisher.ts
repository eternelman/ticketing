import { Publisher, OrderCancelledEvent, Subjects } from "@etertickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
