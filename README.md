# 4th BRICS Film Festival

[![Netlify Status](https://api.netlify.com/api/v1/badges/4c9feb62-6178-4422-aa97-d394162d74b0/deploy-status)](https://app.netlify.com/sites/bricsfilmfestival/deploys)

This is the repository for the Gatsby website and the Wordpress theme of the 4th BRICS Film Festival. Each one has its own README at its root directory with more information about itself.

## [Gatsby website](tree/master/gatsby)

The Gatsby website uses Wordpress as its datasource through the [`gatsby-source-wordpress`](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/) plugin, which transforms Wordpress REST API endpoints on GraphQL types. It uses the CSS-in-JS library [`emotion`](https://github.com/emotion-js/emotion) for styling, and [`jest`](https://jestjs.io/) for testing.

## [Wordpress theme](tree/master/wordpress)

Wordpress is used as an headless CMS through its [REST API](https://developer.wordpress.org/rest-api/), and it is enhanced with [Advanced Custom Fields](https://www.advancedcustomfields.com/). The theme's code follows the [Wordpress PHP Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/) and it will use [PHPUnit](https://phpunit.de/) for testing.
