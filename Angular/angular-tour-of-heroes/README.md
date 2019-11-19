# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to executek the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Tour of Heros
## 1. [Hero Editor](https://angular.io/tutorial/toh-pt1)

 - Generated  app/heros 
    - `ng g c <name>`
 - learned properties
    - `foo = 'bar';`
 - data binding
    - `{{ name.foo }}`
 - created class in ts
   - `export class name {` 
      `  foo: string;`
      `}`
 - displayed properties on the class
   - `<h2> {{ name.foo }} </h2>`
- learned two way binding
   - ` <input [(ngModel)]="name.foo" placeholder="name"/>`
   - need to import FormsModule into app.module.ts to use from @angular/forms
     - `import { FormsModule } from '@angular/forms'; // <-- NgModel lives here`
    - and include it in the imports
      - `imports: [`
    `..     FormsModule,`
    `.. ],`
 - learned that cli imported generated Component

 ## 2. [Diplaying lists](https://angular.io/tutorial/toh-pt2)
  - created mock list of heros app/mock-heroes.ts
  - imported it to the component
  - initalized the list in the component
  - displayed a list using *ngFor to generate `<li>`'s
    - `<li *ngFor="let hero of heroes">`
 - added predefined styles
