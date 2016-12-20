import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
  	<div *ngIf="hero" class="well col-xs-6 col-md-4">
		<label>{{hero.name}} details!</label>
		<div>
			<label class="label label-default">id: </label>{{hero.id}}
		</div>
		<div>
			<label class="label label-default">name: </label>
			<input [(ngModel)]="hero.name" />
		</div>
	</div>
`
})
export class HeroDetailComponent {
	@Input()
	hero:Hero;
}
