const _ = require('lodash');
const path = require('path');
const slash = require('slash');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for Wordpress pages (route : /{slug})
// Will create pages for Wordpress posts (route : /post/{slug})
exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions;

  // ==== FESTIVAL (PT) ====
  await graphql(
    `
      {
        allWordpressWpPtFestival {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/festival.pt.js');
    _.each(result.data.allWordpressWpPtFestival.edges, edge => {
      createPage({
        path: '/pt/o-festival/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== FESTIVAL (EN) ====
  await graphql(
    `
      {
        allWordpressWpEnFestival {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/festival.en.js');
    _.each(result.data.allWordpressWpEnFestival.edges, edge => {
      createPage({
        path: '/en/the-festival/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== SCREENINGS (PT) ====
  await graphql(
    `
      {
        allWordpressWpPtScreenings {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/screenings.pt.js');
    _.each(result.data.allWordpressWpPtScreenings.edges, edge => {
      createPage({
        path: '/pt/mostras/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== SCREENINGS (EN) ====
  await graphql(
    `
      {
        allWordpressWpEnScreenings {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/screenings.en.js');
    _.each(result.data.allWordpressWpEnScreenings.edges, edge => {
      createPage({
        path: '/en/screenings/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== ACTIVITIES (PT) ====
  await graphql(
    `
      {
        allWordpressWpPtActivities {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/activities.pt.js');
    _.each(result.data.allWordpressWpPtActivities.edges, edge => {
      createPage({
        path: '/pt/atividades/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== ACTIVITIES (EN) ====
  await graphql(
    `
      {
        allWordpressWpEnActivities {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/activities.en.js');
    _.each(result.data.allWordpressWpEnActivities.edges, edge => {
      createPage({
        path: '/en/activities/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== CALLS (PT) ====
  await graphql(
    `
      {
        allWordpressWpPtCalls {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/calls.pt.js');
    _.each(result.data.allWordpressWpPtCalls.edges, edge => {
      createPage({
        path: '/pt/chamadas/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== CALLS (EN) ====
  await graphql(
    `
      {
        allWordpressWpEnCalls {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/calls.en.js');
    _.each(result.data.allWordpressWpEnCalls.edges, edge => {
      createPage({
        path: '/en/calls/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== NEWS (PT) ====
  await graphql(
    `
      {
        allWordpressWpPtNews {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/news.pt.js');
    _.each(result.data.allWordpressWpPtNews.edges, edge => {
      createPage({
        path: '/pt/noticias/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== NEWS (EN) ====
  await graphql(
    `
      {
        allWordpressWpEnNews {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/news.en.js');
    _.each(result.data.allWordpressWpEnNews.edges, edge => {
      createPage({
        path: '/en/news/' + edge.node.slug + '/',
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // ==== FILMS (PT) ====
  await graphql(
    `
      {
        allWordpressWpPtFilms {
          edges {
            node {
              id
              slug
              acf {
                screening {
                  post_name
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
    }

    const template = path.resolve('./src/templates/films.pt.js');
    _.each(result.data.allWordpressWpPtFilms.edges, edge => {
      createPage({
        path: `/pt/mostras/${edge.node.acf.screening.post_name}/${edge.node.slug }/`,
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  // // ==== FILMS (EN) ====
  // await graphql(
  //   `
  //     {
  //       allWordpressWpEnFilms {
  //         edges {
  //           node {
  //             id
  //             acf {
  //               screening {
  //                 post_name
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // ).then(result => {
  //   if (result.errors) {
  //     console.log(result.errors);
  //   }

  //   const template = path.resolve('./src/templates/films.en.js');
  //   _.each(result.data.allWordpressWpEnFilms.edges, edge => {
  //     createPage({
  //       path: `/en/screenings/${edge.node.acf.screening.post_name}/${edge.node.slug }/`,
  //       component: slash(template),
  //       context: {
  //         id: edge.node.id,
  //       },
  //     });
  //   });
  // });
};