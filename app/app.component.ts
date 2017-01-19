import {Component} from '@angular/core';
@Component({
moduleId: module.id,
selector : 'my-app',
template: `
	<img src="http://maxmussuto.com/inteligenciadenegocios/wp-content/uploads/2016/12/logo_site_color.jpg" style="width:304px;height:228px;">
    <h1>{{title}}</h1>
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
	title='Tour of heroes';
}