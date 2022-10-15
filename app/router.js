import EmberRouter from '@ember/routing/router';
import config from 'stel-stay/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('rooms');
  this.route('apply');
  this.route('manage-account');
  this.route('my-living', function () {
    this.route('invoice');
  });



});
