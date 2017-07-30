import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes:Routes=[
	{
		path: "index",
		loadChildren: "./home/home.module#HomeModule"
	},
	{
		path: "news",
		loadChildren: "./news/news.module#NewsModule"
	},
	{
		path: "contact/:type",
		loadChildren: "./contact/contact.module#ContactModule"
	},
	{
		path: "guide",
		loadChildren: "./guide/guide.module#GuideModule"
	},
	{
		path: "prod/:id",
		loadChildren: "./prod/prod.module#ProdModule"
	},
	{
		path: "type/:name",
		loadChildren: "./type/type.module#TypeModule"
	},
	{
		path: "manager",
		loadChildren: "./manager/manager.module#ManagerModule"
	},
	{
		path:"",
		redirectTo:"index",
		pathMatch: 'full'
	}
]
@NgModule({
	imports:[
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports:[
		RouterModule
	]
})
export class AppRoutingModule{}