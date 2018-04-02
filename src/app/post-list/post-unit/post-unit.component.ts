import { Component, OnInit, Input } from '@angular/core';
import { Links } from '../../posts.model';

@Component({
  selector: 'app-post-unit',
  templateUrl: './post-unit.component.html',
  styleUrls: ['./post-unit.component.css']
})
export class PostUnitComponent implements OnInit {

  @Input() link: Links[]

  constructor() { }

  ngOnInit() {
  }

}
