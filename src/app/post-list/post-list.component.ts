import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  links = []
  @Input() searchText:string

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.loadPosts()
  }

  loadPosts(){
    this.postsService.links().subscribe(links => this.links = links.links)
  }

   // method to sort the results by popularity, comments or date
   sortPosts(filter: string) {
    this.links = Object.values(this.links);
    switch (filter) {
      case 'popular':
        this.links.sort((a, b) => b.upvotes.valueOf() - a.upvotes.valueOf()) // return the results sorted by popularity
        break
      case 'date':
        this.links.sort((a, b) => { // sort to get the costs sorted by the newest
            if (a.created_at && b.created_at) {
              return b.created_at.valueOf() - a.created_at.valueOf() // return the results sorted by the newest
            }
          })
        break
      case 'comments':
        this.links.sort((a, b) => b.comments.valueOf() - a.comments.valueOf()) // return the results sorted by most comments
        break
    }
    return this.links
  }

}
