import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';



@Component({
selector: 'my-heroes',
template: `

		<div class="well col-xs-6 col-md-4" >
		<label>My Heroes</label>
		<ul class="heroes">
			<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
				<span class = "badge">{{hero.id}} </span>{{hero.name}}
			</li>
		</ul>
		</div>
		<my-hero-detail [hero]="selectedHero"></my-hero-detail>
`
,
})
export class HeroesComponent implements OnInit  { 
	constructor(private heroService: HeroService) { };

	name = 'Angular'; 
	title = 'Tour of heroes';
	selectedHero: Hero;
 	heroes: Hero[];

 	ngOnInit():void{
 		this.getHeroes();
 	};

 	getHeroes(): void {
  		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}


	onSelect(hero:Hero):void{
		this.selectedHero=hero;
	}
}
