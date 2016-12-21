import { Component } from '@angular/core';
import { Router }   from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';



@Component({
moduleId: module.id,
selector: 'my-heroes',
templateUrl: 'heroes.component.html',
styleUrls : [ 'heroes.component.css' ],
})
export class HeroesComponent implements OnInit  { 
	constructor(
		private heroService: HeroService,
		private router: Router
		) { };

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

	gotoDetail(): void {
  		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	add(name: string): void {
  		name = name.trim();
  		if (!name) { return; }
  		
  		this.heroService.create(name)
    		.then(hero => {this.heroes.push(hero);
      		this.selectedHero = null;});
	}

	delete(hero: Hero): void {
		  this.heroService
  	      .delete(hero.id)
      	  .then(() => {
        	this.heroes = this.heroes.filter(h => h !== hero);
        	if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}


}
