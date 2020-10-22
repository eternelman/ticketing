import { Publisher, Subjects, TicketUpdatedEvent } from "@etertickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
