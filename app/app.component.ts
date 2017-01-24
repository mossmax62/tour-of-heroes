import {Component} from '@angular/core';
@Component({
moduleId: module.id,
selector : 'my-app',
template: `
	
    <div class="well" style="text-align: center;">
    <img src="app/resources/logo-mm.jpg" class="img" style="width:304px;height:228px;">
    <h1>{{title}}</h1></div>
    <div>
    <nav>
    	<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	</nav>
    </div>
    <router-outlet></router-outlet>
 `,
styleUrls :['app.component.css'],
})
export class AppComponent{
	title='Google Angular 2 App by Max Mussuto';
}