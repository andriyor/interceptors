import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-generic-infinite-scroll',
  templateUrl: './generic-infinite-scroll.component.html',
  styleUrls: ['./generic-infinite-scroll.component.css']
})
export class GenericInfiniteScrollComponent implements OnInit, OnChanges {
  @Input() url;
  @Output() itemSelect = new EventEmitter();
  items = [];
  currentPage = 1;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.initialItems();
  }

  ngOnChanges() {
    this.initialItems();
  }

  initialItems() {
    this.http.get(this.url).subscribe((items: []) => {
      this.items = items;
    })
  }

  onScroll () {
    this.currentPage += 1;
    this.http.get(`${this.url}?page=${this.currentPage}`).subscribe((items: []) => {
      this.items = [...this.items, ...items];
    })
  }

  onItemSelect(item) {
    this.itemSelect.emit(item);
  }

}
