import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input() post;
  @Output() postClick = new EventEmitter<number>();
  ngOnInit(): void {

  }

  clickPost(){
    this.postClick.emit( this.post.id );
  }
}
