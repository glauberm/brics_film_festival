module.exports = {
  siteMetadata: {
    siteUrl: 'http://bricsfilmfestival.com.br',
  },
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: 'wp.bricsfilmfestival.com.br',
        // The protocol. This can be http or https.
        protocol: 'https',
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com
        useACF: true,
        // // Include specific ACF Option Pages that have a set post ID
        // // Regardless if an ID is set, the default options route will still be retrieved
        // // Must be using V3 of ACF to REST to include these routes
        // // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // // routes with the ID option_page_1 and option_page_2
        // // Dashes in IDs will be converted to underscores for use in GraphQL
        // acfOptionPageIds: [],
        // auth: {
        //   // If auth.user and auth.pass are filled, then the source plugin will be allowed
        //   // to access endpoints that are protected with .htaccess.
        //   htaccess_user: "your-htaccess-username",
        //   htaccess_pass: "your-htaccess-password",
        //   htaccess_sendImmediately: false,

        //   // If hostingWPCOM is true then you will need to communicate with wordpress.com API
        //   // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
        //   // then add your clientId, clientSecret, username, and password here
        //   // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
        //   // If two-factor authentication is enabled then you need to create an Application-Specific Password,
        //   // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
        //   wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
        //   wpcom_app_clientId: "54793",
        //   wpcom_user: "gatsbyjswpexample@gmail.com",
        //   wpcom_pass: process.env.WORDPRESS_PASSWORD,

        //   // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
        //   // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in wordpress wp-api.
        //   // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
        //   jwt_user: process.env.JWT_USER,
        //   jwt_pass: process.env.JWT_PASSWORD,
        //   jwt_base_path: "/jwt-auth/v1/token" # Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        // },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // // Set WP REST API routes whitelists
        // // and blacklists using glob patterns.
        // // Defaults to whitelist the routes shown
        // // in the example below.
        // // See: https://github.com/isaacs/minimatch
        // // Example:  `["/*/*/comments", "/yoast/**"]`
        // // ` will either include or exclude routes ending in `comments` and
        // // all routes that begin with `yoast` from fetch.
        // // Whitelisted routes using glob patterns
        includedRoutes: [
          // '**/categories',
          // '**/posts',
          // '**/pages',
          '**/media',
          // '**/tags',
          // '**/taxonomies',
          // '**/users',
          '**/pt_site_info',
          '**/en_site_info',
          '**/pt_festival',
          '**/en_festival',
          '**/pt_schedule',
          '**/en_schedule',
          '**/pt_films',
          '**/en_films',
          '**/pt_screenings',
          '**/en_screenings',
          '**/pt_activities',
          '**/en_activities',
          '**/pt_calls',
          '**/en_calls',
          '**/pt_news',
          '**/en_news',
        ],
        // // Blacklisted routes using glob patterns
        // excludedRoutes: ["**/posts/1456"],
        // // use a custom normalizer which is applied after the built-in ones.
        // normalizer: function({ entities }) {
        //   return entities
        // }
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#009641',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '4º BRICS Film Festival',
        short_name: '4th BRICS Film Festival',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1d1d1b',
        display: 'standalone',
        icon: 'src/images/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/pt/404', '/en/404'],
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-recaptcha',
    'gatsby-plugin-emotion',
    'gatsby-plugin-eslint',
  ],
};
