import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), // @NgModule에 메타데이터 지정시, 모듈이 생성될 때 라우터를 초기화하면서 브라우저의 주소가 변화되는 것을 감지한다.
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
