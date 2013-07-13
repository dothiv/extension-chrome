Chrome Browser-Plugin
======================
shows the .hiv-icon in the addressbar for an url from a domain, which is registered at the .hiv organization.

When clicking on this icon the browser switches to the corresponding .hiv-Url.

API
---
s. `http://hiv.enit.biz/app_dev.php/api/doc/`

Dependencies
------------
- http://requirejs.org/
       see also http://prezi.com/rodnyr5awftr/requirejs-in-chrome-extensions/

- https://github.com/pyrsmk/qwest

TODOs
=====

1. Unit-Tests von Modules
2. Configuration.js mit baseUrl
3. Funktionalität, die auch die anderen Plugins benötigen, herausziehen:
    - app-storage?
    - configuration.js?

4. bei app-storage/localstorage an private mode(->kein localstorage) denken: Konfigurierbar machen?
   Könnte für unsere Server zu viel Last erzeugen, jedesmal alle Alternativen rüberzusenden...

5. Produktives Paket mit min-Varianten erzeugen
