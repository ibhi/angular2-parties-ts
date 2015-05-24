/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {PartiesList} from './parties-list'

@Component({
  selector: 'parties-app',
})
@View({
  templateUrl: './templates/parties-app.html',
  directives: [PartiesList]
})
class PartiesApp {
  constructor() {
  }
}

bootstrap(PartiesApp);
