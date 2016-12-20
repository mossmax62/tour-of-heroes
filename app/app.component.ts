import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';



@Component({
selector: 'my-app',
template: `
<div class="navbar-header">
	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	</button>
	<a class="navbar-brand" href="#">{{title}}</a>
</div>
<div id="navbar" class="navbar-collapse collapse">
	<form class="navbar-form navbar-right">
		<div class="form-group">
			<input type="text" placeholder="Email" class="form-control">
		</div>
		<div class="form-group">
			<input type="password" placeholder="Password" class="form-control">
		</div>
		<button type="submit" class="btn btn-success">Sign in</button>
	</form>
</div><!--/.navbar-collapse -->


<div class = "row">
	<div class = "well col-xs-6 col-md-4">

		<label>My Heroes</label>
		<ul class="heroes">
			<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
				<span class = "badge">{{hero.id}} </span>{{hero.name}}
			</li>
		</ul>
	</div>

<my-hero-detail [hero]="selectedHero"></my-hero-detail>
</div>
`
,
providers:[HeroService],
})
export class AppComponent implements OnInit  { 
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
