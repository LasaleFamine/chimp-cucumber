'use strict'

module.exports = function () {
  this.Given(/^I visit "([^"]*)"$/, function (site) {
		browser.windowHandleMaximize()
    browser.url(site)
  })
	this.Then(/^The text of "([^"]*)" is "([^"]*)"$/, function (selector, text) {
		const htmlText = browser.getText(selector)
		assert.equal(text, htmlText)
	})
}
