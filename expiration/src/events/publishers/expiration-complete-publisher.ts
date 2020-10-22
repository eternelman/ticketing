import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@etertickets/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
