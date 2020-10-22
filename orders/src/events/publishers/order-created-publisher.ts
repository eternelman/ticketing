import { Publisher, OrderCreatedEvent, Subjects } from "@etertickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
