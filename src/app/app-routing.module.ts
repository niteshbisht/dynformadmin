import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackCollectComponent } from './components/feedback-page/feedback-collect/feedback-collect.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';

const routes: Routes = [{
  path: 'feedback', component: FeedbackCollectComponent
},
{
  path: 'admin', component: AdminPageComponent
}, {
  path: '**', component: FeedbackCollectComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
