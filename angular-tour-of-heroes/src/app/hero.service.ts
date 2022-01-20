import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly heroesUrl: string = `api/heroes`;
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private readonly http: HttpClient,
    private readonly messageService: MessageService
  ) {}

  addHero(hero: Hero) {
    return this.http
      .post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(
          (newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`),
          catchError(this.handleError<Hero>(`addHero`))
        )
      );
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log(`fetched heroes`)),
      catchError(this.handleError<Hero[]>(`getHeroes`, []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>(`updateHero`))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(() => this.log(`deleted hero id = ${id}`)),
      catchError(this.handleError<Hero>(`deleteHero`))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // 입력된 내용이 없으면 빈 배열을 반환한다.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>(`searchHeroes`, []))
    );
  }

  private log(message: string) {
    this.messageService.add(`Hero Service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: 리모트 서버로 에러 메시지 보내기
      console.error(error);

      // TODO: 사용자가 이해할 수 있는 형태로 변환하기
      this.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    };
  }
}
