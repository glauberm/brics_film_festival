import React from 'react';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import Event from './Event';
import { colors, breakpoints } from '../styles/theme';

class Events extends React.PureComponent {
  render() {
    return (
      <Container>
        {this.props.events.map((event, i) => (
          <React.Fragment key={i}>
            <HeadingContainer className='sticky'>
              <Heading>
                {this.props.intl.formatMessage({
                  id: event.edges[0].node.acf.days
                })}
              </Heading>
            </HeadingContainer>
            {event.edges.map(({ node }, j) => (
              <Event
                key={j}
                time={node.acf.time}
                title={node.title}
                subtitle={node.acf.subtitle}
                duration={node.acf.duration}
                parentalRating={node.acf.parental_rating}
                venue={
                  (node.acf.venue && node.acf.venue.post_title)
                    ? node.acf.venue.post_title
                    : null
                }
                screening={
                  (node.acf.screening && node.acf.screening.post_name)
                    ? node.acf.screening.post_name
                    : null
                }
                activity={
                  (node.acf.activity && node.acf.activity.post_name)
                    ? node.acf.activity.post_name
                    : null
                }
                films={node.acf.films}
                obs={node.acf.obs}
              />
            ))}
          </React.Fragment>
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  margin-bottom: 3em;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
  height: 5em;
  margin-top: 3em;
  padding-top: 1em;
  background-color: ${colors.white};

  :first-of-type {
    margin-top: 0;
  }
`;

const Heading = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 1.666em;
  color: ${colors.blackLight};

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    background: linear-gradient(
      to right,
      ${colors.green} 0%,
      ${colors.green} 20%,
      ${colors.blue} 20%,
      ${colors.blue} 40%,
      ${colors.orange} 40%,
      ${colors.orange} 60%,
      ${colors.red} 60%,
      ${colors.red} 80%,
      ${colors.yellow} 80%,
      ${colors.yellow} 100%
    );
    height: 4px;

    @media (min-width: ${breakpoints.sm}px) {
      width: 30%;
    }
  }
`;

export default injectIntl(Events);