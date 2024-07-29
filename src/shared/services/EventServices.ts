import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({providedIn:"root"})
export class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: any) {
        // debugger
        console.log('=======', eventName, payload)
        this.subject.next({ eventName, payload });
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj: any) => {
            // debugger
            if (eventName === nextObj.eventName) {
                callback(nextObj.payload);
            }
        });
    }
}

// export default new EventService();