import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

//@Component는 클래스에 메타데이터를 지정해서 Angular 컴포넌트로 선언하는 데코레이터 함수이다.
@Component({
  selector: 'app-heroes', //component의 CSS 엘리먼트 셀렉터
  templateUrl: './heroes.component.html', // 컴포넌트 템플릿 파일의 위치
  styleUrls: ['./heroes.component.scss'], // 컴포넌트 CSS 스타일 파일의 위치
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private readonly heroService: HeroService) {}

  /**
   * 라이프싸이클 후킹 함수.
   * Angular는 컴포넌트를 생성한 직후에 ngOnInit을 호출한다.
   * 컴포넌트를 초기화하는 로직은 이 메서드에 작성하는 것이 좋다.
   *
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
