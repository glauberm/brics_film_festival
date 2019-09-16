import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'react-intl';

import Section from '../Section';

const CallsNav = (props) => {
  const { allWordpressWpEnCalls } = useStaticQuery(
    graphql`
      query {
        allWordpressWpEnCalls(
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
      linkTo={props.intl.formatMessage({ id: 'navigationCallsHref' })}
      title={props.intl.formatMessage({ id: 'navigationCallsText' })}
    >
      <nav aria-label={props.intl.formatMessage({ id: 'navigationCallsText' })}>
        <ul>
          {allWordpressWpEnCalls.edges.map(({ node }) => (
            <li key={node.id}>
              <Link
                to={
                  props.intl.formatMessage({ id: 'navigationCallsHref' })
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

export default injectIntl(CallsNav);