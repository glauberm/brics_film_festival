import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import ScreeningsNav from '../components/I18n/en/ScreeningsNav';
import FilmGrid from '../components/FilmGrid';

class ScreeningsTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const screening = this.props.data.wordpressWpEnScreenings;
    const films = this.props.data.allWordpressWpEnFilms;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={screening.title}
          pathname={pathname}
          langPt={ screening.acf.lang_pt
            ? '/pt/mostras/' + screening.acf.lang_pt.post_name + '/'
            : ''
          }
          langEn={pathname}
          secondaryColumn={
            <ScreeningsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/en/screenings/', text: 'Screenings'},
            {href: `/en/screenings/${screening.slug}/`, text: screening.title}
          ]} />
          <h1 className='title'>
            <span dangerouslySetInnerHTML={{ __html: screening.title }} />
            { screening.acf.subtitle && 
              <React.Fragment>
                <br />
                <small
                  dangerouslySetInnerHTML={{ __html: screening.acf.subtitle }}
                />
              </React.Fragment>
            }
          </h1>
          <div dangerouslySetInnerHTML={{ __html: screening.acf.html }} />
          <h2 className='title'>Films</h2>
          <FilmGrid films={films.edges} />
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!, $wordpressId: Int!) {
    wordpressWpEnScreenings(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        subtitle
        html
        lang_pt {
          post_name
        }
      }
    }
    allWordpressWpEnFilms(
      filter: {
        acf: {
          screening: {
            wordpress_id: {eq: $wordpressId}
          }
        }
      },
      sort: {
        fields: title,
        order: ASC
      }
    ) {
      edges {
        node {
          wordpress_id
          title
          slug
          acf {
            image {
              localFile {
                childImageSharp {
                  resize(width: 400, height: 200, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
            screening {
              post_name
            }
          }
        }
      }
    }
  }
`;

export default ScreeningsTemplate;