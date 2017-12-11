import {Component, OnInit} from '@angular/core';
import {ClipboardService} from '../clipboard.service';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-dump',
    templateUrl: './dump.component.html',
    styleUrls: ['./dump.component.css']
})
export class DumpComponent implements OnInit {
    private clipboardList: string[];

    constructor(private clipboardServive: ClipboardService) {

    }

    ngOnInit() {
        this.clipboardList = [];

        this.clipboardServive.getText()
            .distinctUntilChanged()
            .subscribe(value => {
                this.clipboardList.push(value);
            });
    }
}
