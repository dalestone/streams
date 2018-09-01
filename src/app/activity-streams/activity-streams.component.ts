import { Component, Input, HostListener } from '@angular/core';

@Component({
    selector: 'activity-streams',
    templateUrl: 'activity-streams.component.html',
    styleUrls: ['./activity-streams.component.scss']
})
export class ActivityStreams {
    @Input() dots: boolean = false;
    @Input() dynamicResize: boolean = false;
    @Input() cols: number = 3;
    @Input() streams: any[] = [];

    private _streams: any[] = [];
    private _index = 0;
    private _dots = [];
    private _messages = Array(100);
    private _streamColumnWidth = 200;

    constructor() {

    }

    ngOnInit() {
        this.chunk();
    }

    next(index: number) {
        this._index = index;
    }

    onSwipeLeft(event: any) {
        if (this._index + 1 > this._streams.length) {
            this.next(this.streams.length - 1);
        } else {
            this.next(this._index + 1);
        }
    }

    onSwipeRight(event: any) {
        if (this._index - 1 < 0) {
            this.next(0);
        } else {
            this.next(this._index - 1);
        }
    }

    chunk() {
        while (this.streams.length > 0) {
            this._streams.push(this.streams.splice(0, this.cols));
        }

        this._dots = Array(this._streams.length);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        // 3 cols each 200
        let colsWidth = this._streams.length * this._streamColumnWidth;
        console.log(colsWidth, window.innerWidth);

        // if (colsWidth > window.innerWidth) {
        //     this.cols -= 1;
        // } else {
        //     this.cols += 1;
        // }

        // console.log(this.cols);

        //this.chunk();
    }
}