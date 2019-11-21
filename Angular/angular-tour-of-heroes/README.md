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

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

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

 ## 2. [Displaying lists](https://angular.io/tutorial/toh-pt2)
  - created mock list of heros app/mock-heroes.ts
  - imported it to the component
  - initalized the list in the component
  - displayed a list using *ngFor to generate `<li>`'s
    - `*ngFor="let i of Is"`
 - added predefined styles
 - added click binding to markup
   - `(click)="onSelect()"`
 - defined click handler in component.ts
  - ` onSelect(){...}`
- added div to include hero details/rendered them
- learned `*ngIf="..."` command, used to not render div on condition
- added [class binding](https://angular.io/guide/template-syntax#class-binding) to conditionally style the selected `<li>`
  - `[class.selected]="some condition"`

## 3. [Master/Detail Components](https://angular.io/tutorial/toh-pt3)
- generated new heroDetail component
- rendered hero details
- imported the hero to the component
- updated the angular cli import to include `Input`
- learned a bit about [Input Properties](https://angular.io/guide/template-syntax#inputs-outputs)
- added hero property to HeroComponent 
  - `@Input() property: Class`
- added the heroDetail component to the hero component
  - `<componentName [property]="value"> </componentName>`

  ## 4. [Services](https://angular.io/tutorial/toh-pt4)
  - generated hero service `ng generate service <name>` or `ng g s <name>`
  - `@Injectable()` imported automatically
    - decorator used for DI 
  - added hero service to include a getHeroes method to return the mocked heros
  - learned about CLI injecting `providedIn: 'root'` on the service.  
   - `@Injectable` also is used to optimize the app by removing service if its not required
  - updated heroes component to leverage new service
  - getHeroes method on servie is currently syncronous.  we will leverage `RxJS` to make it async. 
   - added `Observable, of` to heroes service
   - updated `getHeroes` to return `Observable<T>` instead of `T`
   - updated `getHeroes` the return to `of(object)` vs `object`
  - updated heros component to call `service.method().subscribe( <function>)` so it could leverage the observable see [subscription in RxJS](https://rxjs-dev.firebaseapp.com/guide/subscription)
   - `subscribe()` passes emited array to called function
  - generated Message component
  - added message to app component
  - generated message service
   - updated service to include a Messages array and added `add` and `clear` methods
 - injected messages service to hero service
 - updated getHeroes (on hero service) to send the message service a message when getheros is called
 - updated the messages componet to inject the message service, as a `public` property so it can be bound to the template
- updated message component to display messages and clear them
- Bonus: updated heroes component to include message service and add message when new hero is added

 ## 5. [Routing](https://angular.io/guide/router)
  - added routing module via `ng generate module app-routing --flat --module=app`
   - `--flat puts the file in src/app instead of its own folder.`
   - `--module=app tells the CLI to register it in the imports array of the AppModule.`

 - updated the app-routing module to have the path `"heroes"` route to the HeroComponent
  - declared `Routes` array with a Route=`{ path: '{url}', component: {component} }`
  - added `RouterModule.forRoot(<arrayOfRoutes>)` to import array. [forRoute Docs](https://angular.io/api/router/RouterModule#forRoot). 
   - attaches the route at the app root level
  - added `RouterModule` to exports array
 - updated app component to use `<router-outlet>` from heros component
  - outlet tells the broswer where to render routed views
- updaed app component to render a nav bar with link to heros page
- created dashboard component
 - renders heroes links 
- added dashboard to app component
- removed hero-details from hero component
- updating routing to support hero details, passing in an `:id` via the path (`path: {name}/:{id}`) oun the route
- updated dashboard to route to details
- updated hero to route to details
- removed `onSelect` from hero 
- added the following angular components
 - [`ActivatedRoute`](https://angular.io/api/router/ActivatedRoute) : provides route info to the component instance
 - [`Location`](https://angular.io/api/common/Location) : provides browser interation
- added `getHero` method to hero detail
 - gets `id` from the `route.snapshot.paramMap.get('{paramName}')`
 - uses `id` to get that specific id from the hero service
- added missing async `getId` method to the hero service
- added back button on hero component
