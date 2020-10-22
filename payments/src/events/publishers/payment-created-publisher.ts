import { Subjects, Publisher, PaymentCreatedEvent } from "@etertickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
