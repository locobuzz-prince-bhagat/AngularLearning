import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../Services/Todo/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  selectedPost: any = null;
  isEditing: boolean = false;
  searchTerm: string = '';
  notFound: boolean = false;

  postForm = {
    id: null as number | null,
    title: '',
    body: '',
    userId: 1
  };

  constructor(private dataService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 10); // Load top 10 for performance
    });
  }

  submitForm() {
    if (this.postForm.id === null) {
      this.dataService.createPost(this.postForm).subscribe(response => {
        console.log('Post Created:', response);
        this.loadPosts();
        this.resetForm();
      });
    } else {
      this.dataService.updatePost(this.postForm.id, this.postForm).subscribe(response => {
        console.log('Post Updated:', response);
        this.loadPosts();
        this.resetForm();
      });
    }
  }

  editPost(post: any) {
    this.postForm = { ...post };
    this.isEditing = true;
  }

  deletePost(postId: number) {
    this.dataService.deletePost(postId).subscribe(() => {
      console.log('Post Deleted');
      this.loadPosts();
    });
  }

  viewPost(postId: number) {
    this.dataService.getPostById(postId).subscribe(post => {
      this.selectedPost = post;
    });
  }

  resetForm() {
    this.postForm = {
      id: null,
      title: '',
      body: '',
      userId: 1
    };
    this.isEditing = false;
  }

  searchPost() {
    this.notFound = false;
    this.selectedPost = null;
    const trimmed = this.searchTerm.trim();

    if (!trimmed) return;

    const postId = Number(trimmed);
    if (!isNaN(postId)) {
      // Search by ID using API
      this.dataService.getPostById(postId).subscribe({
        next: post => this.selectedPost = post,
        error: () => this.notFound = true
      });
    } else {
      // Search by title locally
      const match = this.posts.find(p =>
        p.title.toLowerCase().includes(trimmed.toLowerCase())
      );
      if (match) {
        this.selectedPost = match;
      } else {
        this.notFound = true;
      }
    }
  }
  highlightMatch(text: string): string {
  if (!this.searchTerm) return text;
  const escapedTerm = this.searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special chars
  const regex = new RegExp(`(${escapedTerm})`, 'gi');
  return text.replace(regex, `<mark>$1</mark>`);
}

}
