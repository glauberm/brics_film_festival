import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Section from '../../Section';

const NewsNav = (props) => {
  const { allWordpressWpEnNews } = useStaticQuery(
    graphql`
      query {
        allWordpressWpEnNews(
          sort: {
            fields: [date]
            order: [DESC]
          }
        ) {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `
  );

  return (
    <Section
      linkTo={props.intl.formatMessage({ id: 'navigationNewsHref' })}
      title={props.intl.formatMessage({ id: 'navigationNewsText' })}
    >
      <nav aria-label={props.intl.formatMessage({ id: 'navigationNewsText' })}>
        <ul>
          {allWordpressWpEnNews.edges.map(({ node }) => (
            <li key={node.id}>
              <Link
                to={
                  props.intl.formatMessage({ id: 'navigationNewsHref' })
                  + node.slug + '/'
                }
                activeClassName='active'
                dangerouslySetInnerHTML={{ __html: node.title }} 
              />
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
};

export default injectIntl(NewsNav);