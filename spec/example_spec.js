'use strict';

describe('Application Homepage', function() {
  it('should display the application name', function() {
    browser.get('http://localhost:9000');

    var appName = element(by.css('h3.text-muted'));

    expect(appName.getText()).toEqual('App1');
  });

});
