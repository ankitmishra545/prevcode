import { Subject, BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject();

export const messageService = {
    sendMessage: message => subject.next({text: message}),
    clearMessage: () => subject.next(),
    getMessage: () => subject.asObservable()
};