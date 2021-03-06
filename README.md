# Udacity NanoDegree FeedReader (Jasmine tests project)

## Project Overview

In this project [Udacity](https://udacity.com) has provided a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where I came in. (text has been edited from the udacity repo intro to make more sense)

## Getting started

- To view project:
-- Go to: [FeedReader With Jasmin Tests](https://ziadalame.github.io/frontend-nanodegree-feedreader/index.html)
-- Load unsafe scripts (for https compliance)
-- Scroll to the end of the page to see the Jasmine test results
- To deploy on your machine, follow the below steps:

```
$ git clone git@github.com:ziadalame/frontend-nanodegree-feedreader.git
$ cd frontend-nanodegree-feedreader
$ open index.html
```

## Project completion TODO

- [x] Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)
- [x] Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
- [x] Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
- [x] Review the functionality of the application within your browser.
- [x] Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
- [x] Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
- [x] Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
- [x] Return the `allFeeds` variable to a passing state.
- [x] Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
- [x] Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
- [x] Write a new test suite named `"The menu"`.
- [x] Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
- [x] Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
- [x] Write a test suite named `"Initial Entries"`.
- [x] Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
- [x] Write a test suite named `"New Feed Selection"`.
- [x] Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
- [x] No test should be dependent on the results of another.
- [x] Callbacks should be used to ensure that feeds are loaded before they are tested.
- [x] Implement error handling for undefined variables and out-of-bound array access.
- [x] When complete - all of your tests should pass. 
- [x] Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

## Authors

* **Ziad Alame** - *Customization and final points* - [ZiadAlame](https://github.com/ziadalame)
* **Udacity Team** - *Initial work* - [Udacity](https://github.com/udacity)

## License

This project is licensed under the MIT License

## Acknowledgments

* Thank you for Udacity for the awesome code base