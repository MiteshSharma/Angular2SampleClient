# Setup

npm install -g @angular/cli <---- Install angular clie

ng new ProjectName  <---- Create project

npm install @ngrx/core @ngrx/store --save <---- Install redux

npm install @ngrx/effects --save <---- Install effects

ng g module ModuleName --dry-run  <---- Create module, with dry-run we will see plan without it we actually create it

ng g component Component --dry-run <---- Create component, with dry-run we will see plan without it we actually create it

ng serve <---- To start server

ng serve --open <---- To start server

# Explanation

Creating a sample angular 2 app with protected routes (/dashboard), as we want to prevent our users from accessing areas which need authentication. Angular provide feature called Navigation Guard which solves this problem. We are using CanActivate to decide if route is activated with class LoginGuard (currently this is returning fixed response and redirected, which can be extended as needed. We are using modules to create separation of concerns, it helps us stop polluting global scope. We are using redux for data store and effects for making server calls using services. 

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
