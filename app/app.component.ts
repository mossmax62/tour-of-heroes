import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';



const HEROES: Hero[]=[
{ id: 11, name: 'Mr. Nice' },
{ id: 12, name: 'Narco' },
{ id: 13, name: 'Bombasto' },
{ id: 14, name: 'Celeritas' },
{ id: 15, name: 'Magneta' },
{ id: 16, name: 'RubberMan' },
{ id: 17, name: 'Dynama' },
{ id: 18, name: 'Dr IQ' },
{ id: 19, name: 'Magma' },
{ id: 20, name: 'Tornado' }
];

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

		<h2>My Heroes</h2>
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
})
export class AppComponent  { 
name = 'Angular'; 
title = 'Tour of heroes';
selectedHero: Hero;
heroes = HEROES;

onSelect(hero:Hero):void{
	this.selectedHero=hero;
	}
}
