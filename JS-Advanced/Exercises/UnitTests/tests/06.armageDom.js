let assert = require('chai').assert;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}


describe("function nuke", function () {
    beforeEach(() => {
        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some <span>more</span> text</span>
                </div>
            </div>`
    });
    before(()=>global.$ = $);
    it("should do nothing if selectors are equal", function () {
        let beforeNuke = $('body').html();
        nuke('#target', '#target');
        let afterNuke = $('body').html();
        assert.equal(beforeNuke, afterNuke);
    });
    it("should remove one span for ('.target', 'span')", function () {
        let initialTargetLength = $('.target').length;
        let initialSpanLength = $('span').length;
        let initialSpanTargetLength = $('.target').filter('span').length;
        if($('.target').filter('span').has('span')){
            initialSpanLength--;
        }
        nuke(".target", "span");
        assert.equal($('.target').filter('span').length, 0);
        assert.equal($('span').length, initialSpanLength - initialSpanTargetLength);
        assert.equal($('.target').length, initialTargetLength - initialSpanTargetLength);
    });
    it("should remove two divs for ('div', '.target')", function () {
        let initialTargetLength = $('.target').length;
        let initialDivLength = $('div').length;
        let initialDivTargetLength = $('.target').filter('div').length;
        nuke('div', '.target');
        assert.equal($('.target').filter('div').length, 0);
        assert.equal($('div').length, initialDivLength - initialDivTargetLength);
        assert.equal($('.target').length, initialTargetLength - initialDivTargetLength);
    });
    it("should remove one span for", function () {
        nuke('.nested', 'span');
        assert.equal($('span.nested').length, 0);
    });
    it("should return the same html if one parameter is omitted", function () {
        let beforeNuke = $('body').html();
        nuke("div");
        let afterNuke = $('body').html();
        assert.equal(beforeNuke, afterNuke);
    });
    it("should return the same html if one parameter is omitted", function () {
        let beforeNuke = $('body').html();
        nuke("" ,"div");
        let afterNuke = $('body').html();
        assert.equal(beforeNuke, afterNuke);
    });
    it("should do nothing for non-existing selector", function () {
        let beforeNuke = $('body').html();
        nuke("#invalid", "section");
        let afterNuke = $('body').html();
        assert.equal(beforeNuke, afterNuke);
    });
});