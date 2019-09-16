import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Section from '../Section';

const FestivalNav = (props) => {
  const { allWordpressWpEnFestival } = useStaticQuery(
    graphql`
      query {
        allWordpressWpEnFestival(
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
      linkTo={props.intl.formatMessage({ id: 'navigationFestivalHref' })}
      title={props.intl.formatMessage({ id: 'navigationFestivalText' })}
    >
      <nav aria-label={props.intl.formatMessage({ id: 'navigationFestivalText' })}>
        <ul>
          {allWordpressWpEnFestival.edges.map(({ node }) => (
            <li key={node.id}>
              <Link
                to={
                  props.intl.formatMessage({ id: 'navigationFestivalHref' })
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

export default injectIntl(FestivalNav);