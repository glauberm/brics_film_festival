import React, { useState } from 'react';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import Section from '../../Section';
import { ListItem, Button } from '../../../styles/films';

const FilmsNav = (props) => {
  const { allWordpressWpEnFilms } = useStaticQuery(
    graphql`
      query {
        allWordpressWpEnFilms(
          sort: {
            fields: [title]
            order: [ASC]
          }
        ) {
          edges {
            node {
              id
              slug
              title
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
  );

  const [last, setLast] = useState(9);
  const length = allWordpressWpEnFilms.edges.length;

  const handleVisibility = (i) => {
    return (i <= last);
  };

  const increment = () => {
    if (last < length) {
      if ((last + 10) > length) {
        setLast(last + (length - last));
      } else {
        setLast(last + 10);
      }
    }
  };

  return (
    <Section
      title={props.intl.formatMessage({ id: 'navigationFilmsText' })}
    >
      <nav aria-label={props.intl.formatMessage({ id: 'navigationFilmsText' })}>
        <ul>
          {allWordpressWpEnFilms.edges.map(({ node }, i) => (
            <ListItem
              key={i}
              number={i}
              isVisible={handleVisibility(i)}
            >
              <Link
                to={
                  `${props.intl.formatMessage({ id: 'navigationScreeningsHref'} )}${node.acf.screening.post_name}/${node.slug}/`
                }
                activeClassName='active'
                dangerouslySetInnerHTML={{ __html: node.title }} 
              />
            </ListItem>
          ))}
        </ul>
      </nav>
      {(last < length) &&
        <Button onClick={increment}>
          {props.intl.formatMessage({ id: 'loadMore' })}
        </Button>
      }
    </Section>
  );
};

export default injectIntl(FilmsNav);