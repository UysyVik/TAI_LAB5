
import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'new-post',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css']
})
export class NewPostComponent implements OnInit {

  public post = {};
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.data.createPost(this.post).subscribe( (post) => {
      this.router.navigate(['']);
    });
  }
}
