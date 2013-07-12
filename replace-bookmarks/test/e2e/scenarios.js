'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/popup.html');
  });


  it('should automatically redirect to /welcome when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/welcome");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser().navigateTo('#/welcome');
    });


    it('should render welcome.html when user navigates to /welcome', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });
});
