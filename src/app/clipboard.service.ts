import {Injectable} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import Timer = NodeJS.Timer;

@Injectable()
export class ClipboardService {
    private intervalHandle: Timer;

    constructor(private electronService: ElectronService) {
    }

    public getText(): Observable<string> {
        return Observable.create(observer => {
            this.startPolling(observer);
        });
    }

    public stopPolling() {
        if (this.intervalHandle) {
            clearInterval(this.intervalHandle);
        }
    }

    private startPolling(observer: Observer<string>) {
        let clipboard = this.electronService.clipboard;
        this.intervalHandle = setInterval(function () {
            observer.next(clipboard.readText());
        }, 100);
    }
}
