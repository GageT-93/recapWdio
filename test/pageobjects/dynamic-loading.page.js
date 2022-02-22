const Page = require('./page');

class DynamicLoadingPage extends Page {

get btnStart() {
    return $("#start button");
}

open() {
    return super.open('dynamic_loading/1');
}
}

module.exports = new DynamicLoadingPage();
