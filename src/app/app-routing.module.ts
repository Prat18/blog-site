import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListBlogComponent } from './blog-page/list-blog/list-blog.component';
import { DisplayBlogComponent } from './blog-page/display-blog/display-blog.component';
import { CreateBlogComponent } from './admin/create-blog/create-blog.component';
import { AboutComponent } from './admin/about/about.component';
import { HomeComponent } from './admin/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs', component: ListBlogComponent },
  { path: 'blog/:id', component: DisplayBlogComponent },
  { path: 'post', component: CreateBlogComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
