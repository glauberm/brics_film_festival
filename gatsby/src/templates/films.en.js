import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default.en';
import Breadcrumb from '../components/Breadcrumb';
import Film from '../components/Film';
import FilmsNav from '../components/I18n/en/FilmsNav';

class FilmsTemplate extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;
    const data = this.props.data.wordpressWpEnFilms;

    return (
      <React.Fragment>
        <DefaultLayout
          pageTitle={data.title}
          pathname={pathname}
          langPt=''
          langEn={pathname}
          secondaryColumn={
            <FilmsNav />
          }
        >
          <Breadcrumb crumbs={[
            {href: '/en/screenings/', text: 'Screenings'},
            {
              href: `/en/screenings/${data.acf.screening.post_name}/`,
              text: data.acf.screening.post_title
            },
            {
              href: `/en/screenings/${data.acf.screening.post_name}/${data.slug}/`,
              text: data.title
            }
          ]} />
          <Film film={data} />
        </DefaultLayout>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query($id: String!) {
    wordpressWpEnFilms(
      id: {eq: $id}
    ) {
      title
      slug
      acf {
        subtitle
        country
        director
        duration
        institution
        parental_rating
        synopsis
        year
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        screening {
          post_name
          post_title
        }
      }
    }
  }
`;

export default FilmsTemplate;