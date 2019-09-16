import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Section from '../Section';

const ScreeningsNav = (props) => {
  const { allWordpressWpPtScreenings } = useStaticQuery(
    graphql`
      query {
        allWordpressWpPtScreenings(
          sort: {
            fields: [menu_order]
            order: [ASC]
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
      linkTo={props.intl.formatMessage({ id: 'navigationScreeningsHref' })}
      title={props.intl.formatMessage({ id: 'navigationScreeningsText' })}
    >
      <nav aria-label={props.intl.formatMessage({ id: 'navigationScreeningsText' })}>
        <ul>
          {allWordpressWpPtScreenings.edges.map(({ node }) => (
            <li key={node.id}>
              <Link
                to={
                  props.intl.formatMessage({ id: 'navigationScreeningsHref' })
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

export default injectIntl(ScreeningsNav);