User Story
==========

Ziel
----
User sollten Internetsites bequem über .hiv aufrufen können und somit Microspenden auslösen und 'Gutes tun'.

Wie: Per Browser-Plugins

1. Bookmarks austauschen
  * mit einer Möglichkeit, alte Bookmarks wiederherzustellen
  * Favicon erhalten? Wie Chrome-API oder extra-Call oder ...?

2. Diese Seite gibt es auch-Icon:
  * Patricia (ab 23.06.): http://hiv.enit.biz/app_dev.php/api/doc/
  s. pageActions

3. 'Es gibt auch' in der Such-Suggestion-Liste

4. Suchmaschine austauschen google.hiv statt google.com

5. Newsfeed neu-registrierte .hivs für registrierte User (später, wenn Nutzerregistrierung nötig ist)

API
---
s. `http://hiv.enit.biz/app_dev.php/api/doc/`


========================
Start with Plugin 'Es gibt auch' in der Such-Suggestion-Liste'

1. Karma-Tests
2. Config mit Server-Url
3. Alle Alternativen ziehen und in localstorage speichern
   + an private mode(->kein localstorage) denken
4.

Implementierung und Test
========================

taken from `https://github.com/angular/angular-seed/blob/master/README.md`

## Running the app during development

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `scripts/web-server.js`

TODO Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.


## Running the app in production

This really depends on how complex is your app and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere, where they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and a webserver(s).


## Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Karma](http://karma-runner.github.io) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Karma (`sudo npm install -g karma`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/karma.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files


## End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Karma](http://karma-runner.github.io) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`

