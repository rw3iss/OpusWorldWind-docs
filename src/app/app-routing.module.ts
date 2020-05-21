import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { ExamplesComponent } from './views/examples/examples.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { DocsComponent } from './views/docs/docs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'documentation', component: DocsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
