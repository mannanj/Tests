Angular 5 (2) Cheatsheet

Notes
=====
- In general component properties can only be binded by that same component
	- @Input()/@Output() decorators change this behavior
- #LocalReferences can be added to any HTML Element
	- Can be fethched in typescript via @ViewChild
- <ng-content> adds html from another component into the component


Links
=====
- Node.js® and npm
	- Download https://nodejs.org/en/download/
- Angular CLI
	- README.md: basic info on how to use
	- Repo https://github.com/angular/angular-cli
	- Wiki https://github.com/angular/angular-cli/wiki
- Style Guide
	- Wiki https://angular.io/guide/styleguide


Setup
=====
- Install node.js and npm
	- Node.js® and npm https://nodejs.org/en/download/
- Install CLI
	- Angular CLI 'npm install -g @angular/cli'
- Create new app
	- ng new my-app
- Serve app
	- cd my-app && ng serve --open
	- opened on 'http://localhost:4200/'


Angular Run-down
=====
- src folder
	- Entire app lives here
	- app/app.component.{ts,html,css,spec.ts}
		- Defines AppComponent (root component, tree of nested components)
	- app/app.module.ts
		- AppModule: the root module with "metadata"/instructions on how to assemble the app
		- Declares components, libraries, dependencies, etc.
	- ...
- root folder
	- Files to help build, test, maintain, document, deploy app
	- e2e
		- End-to-end tests (a seperate app)
	- node_modules
		- Location for libraries & third party module downloads
	- .angular-cli.json
		- CLI config
	- .editorconfig
		- global editor config file for devs to use similar styling rules
	- tsconfig.json tslint.json
		- Compiler config for IDE and Linting config for TSLint (when running ng lint)


Angular Tutorial
Source: https://angular.io/tutorial/ (Tour of Heroes as of 2.22.18)
=====
- First component
	- CLI created first component (root named: app-root)
	- './src/app/app.component.ts'
		- Component class code/file
	- Page viewed is "application shell" controlled by AppComponent
	- Components are nested-building blocks
- Interpolation binding syntax ('string')
	- <h1>{{ name_here }}</h1>: presents name_here property value to front-end
- Creating components
	- ng generate component name_of_component
	- creates folder, files, and declares it in the AppModule ('src/app/app.module.ts')
	- import { Component, OnInit } from '@angular/core';
		- Component is a symbol always imported
	- @Component({selector: '...', templateUrl: '...', styleUrls: ['...'] })
		- @Component is a decorator that specifies metadata
		- selector: CSS element selector (matches HTML element)
			- Loads/nests this component in parent components
			- i.e. <heroes-component></heroes-component> 
	- export class HeroesComponent implements OnInit { constructor() { } ngOnInit() { } }
		- ngOnInit() is a lifecycle hook for initialization logic
		- export always to allow import from elsewhere (i.e. AppModule)
- Creating components
	- 'src/app/hero.ts'
	- contents: export class Hero { id: number; name: string; }
	- imported in heroes component above via:
		- import { Hero } from '../hero';
