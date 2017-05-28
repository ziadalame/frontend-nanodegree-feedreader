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

$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('are URLS defined, not empty and valid in all feeds', function () {

            // Regex credit: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
            var urlRegex = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

            for (var i = 0; i < allFeeds.length; i++) {

                // URL should be defined in the object
                expect(allFeeds[i].url).toBeDefined();

                // Checking for valid URL via Regex
                expect(allFeeds[i].url).toMatch(urlRegex);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('are feed names defined and not empty in all feeds', function () {
            for (var j = 0; j < allFeeds.length; j++) {
                // Name should be defined in the object
                expect(allFeeds[j].name).toBeDefined();

                // Temporary variable to edit on the feed name
                var testName = allFeeds[j].name;

                // A valid name is at least 2 characters
                // remove spaces from string and check if the length is still greater than 1
                // this is because a string can be made of spaces only and pass the test
                expect(testName.replace(/\s/g, '').length).toBeGreaterThan(1);
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

    describe('The Menu', function () {

        // Check for initial visibility state of menu
        it('Menu is hidden by default', function () {

            // If the body has the "menu-hidden" class, the menu will be hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Check if menu toggles on click
        it('Menu changes visibility on menu item click', function () {

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

    describe('Initial Entries', function () {

        // Wait till feed is loaded
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('checks that loadFeeds loads at least one entry element within the feed container', function (done) {

            // check for the number of entries
            expect($('.feed .entry').length).toBeGreaterThan(0);

            // All done
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */


    describe('New Feed Selection', function () {

        // Get the initial title, and intial entry to make sure the title changes with the feed list
        var initialTitle, initialFirstEntry;

        // Wait till feed is loaded
        beforeEach(function (done) {

            // Get intial content
            loadFeed(0, function () {

                // save rendered content
                initialTitle = $('.header-title').html();
                initialFirstEntry = $('.feed .entry').first().html();

                // Get new content
                loadFeed(1, function () {
                    // Ready for testing
                    done();
                });
            });
        });

        it('checks that content has changed when new feed is loaded', function (done) {

            // Check id title has changed
            expect(initialTitle).not.toEqual($('.header-title').html());

            // Check if content has changed
            expect(initialFirstEntry).not.toEqual($('.feed .entry').first().html());

            // All done
            done();
        });
    });

}());