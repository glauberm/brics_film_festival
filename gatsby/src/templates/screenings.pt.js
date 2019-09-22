import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.pt';
import Breadcrumb from '../components/Breadcrumb';
import ScreeningsNav from '../components/I18n/pt/ScreeningsNav';
import FilmGrid from '../components/FilmGrid';

class ScreeningsTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const screening = this.props.data.wordpressWpPtScreenings;
    const films = this.props.data.allWordpressWpPtFilms;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={screening.title}
          pathname={pathname}
          langPt={pathname}
          langEn={ screening.acf.lang_en
            ? '/en/screenings/' + screening.acf.lang_en.post_name + '/'
            : ''
          }
          secondaryColumn={
            <ScreeningsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/pt/mostras/', text: 'Mostras'},
            {href: `/pt/mostras/${screening.slug}/`, text: screening.title}
          ]} />
          <h1 className='title'>
            <span dangerouslySetInnerHTML={{ __html: screening.title }} />
            { screening.acf.subtitle && 
              <small
                dangerouslySetInnerHTML={{ __html: screening.acf.subtitle }}
              />
            }
          </h1>
          <div dangerouslySetInnerHTML={{ __html: screening.acf.html }} />
          <h2 className='title'>Filmes</h2>
          <FilmGrid films={films.edges} />
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!, $wordpressId: Int!) {
    wordpressWpPtScreenings(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        subtitle
        html
        lang_en {
          post_name
        }
      }
    }
    allWordpressWpPtFilms(
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