/* eslint-disable no-unused-vars */
function BrowserWindow(accountName, windowName, tabs = [{tabURL: 'defaultHomePage.com'}]) {
    this.accountName = accountName;
    this.windowName = windowName;
    this.tabs = tabs;
}

BrowserWindow.prototype.joinWindows = function(window) {
    for (w of window.tabs) {
        this.tabs.push(w);
    }
};
BrowserWindow.prototype.newTab = function(url) {
    this.tabs.push({tabURL: url});
};
BrowserWindow.prototype.closeTab = function(idx) {
    this.tabs.splice(idx, 1);
    if (this.tabs.length === 0) {
        this.tabs = [{tabURL: 'defaultHomePage.com'}];
    }
};
