import StreamingService from "./StreamingService";
import Subscription from "./Subscription";

export default class User {
  name: string;
  subscriptions: Subscription[];

  constructor(name: string) {
    this.name = name;
    this.subscriptions = [];
  }

  subscribe(streamingService: StreamingService) {
    let subscription = new Subscription(streamingService);
    let existingSubscription = this.subscriptions.find(
      (sub) => sub.streamingService.name === streamingService.name
    );
    if (!existingSubscription) {
      this.subscriptions.push(subscription);
      return subscription;
    } else {
      console.error(
        `Subscription failed. User is already subscribed to ${streamingService}`
      );
      return existingSubscription;
    }
  }
}
