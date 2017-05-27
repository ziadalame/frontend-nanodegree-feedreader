/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

'use strict';

$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('are URLS defined, not empty and valid in all feeds', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(checkForURL(allFeeds[i])).toBe(true);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('are feed names defined and not empty in all feeds', function() {
            for (var j = 0; j < allFeeds.length; j++) {
                expect(checkForName(allFeeds[j])).toBe(true);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

    describe('The Menu', function() {

        // Check for initial visibility state of menu
        it('Menu is hidden by default', function() {
            // If the body has the "menu-hidden" class, the menu will be hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Check if menu toggles on click
        it('Menu changes visibility on menu item click', function() {
            // Clicking the first time shoud show the menu by removing the class "menu-hidden" from the body tag
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // Clicking the second time should hide the menu by adding the class "menu-hidden" to the body tag
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());

/**
 * @description Checks if a feed object has a valid URL
 * @param {Object} feedObject - Feed object is a JSON object that we suspect has a url node with valid url content
 */
var checkForURL = function(feedObject) {
    // Reference to regex: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    // Less restrictive version chosen.
    var urlRegex = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
    // Check that the feed object has the node url - if not, we cannot run opperations on an undefined
    if (feedObject.hasOwnProperty('url')) {
        if (feedObject.url.match(urlRegex)) {
            return true;
        }
    }

    // Return false in any case true isn't returned
    return false;
}

/**
 * @description Checks if a feed object has a valid name object and content
 * @param {Object} feedObject - Feed object is a JSON object that we suspect has a name node with valid name content
 */
var checkForName = function(feedObject) {
    // Check that the feed object has the node name - if not, .length will return an error
    if (feedObject.hasOwnProperty('name')) {
        // A valid name has at least 2 characters in it like GV for example
        if (feedObject.name.length >= 2) {
            return true;
        }
    }

    // Return false in any case true isn't returned
    return false;
}