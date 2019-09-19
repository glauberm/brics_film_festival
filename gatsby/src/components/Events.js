import React from 'react';
import styled from '@emotion/styled';

import Event from './Event';
import { colors, breakpoints } from '../styles/theme';

class Events extends React.PureComponent {
  transformHeading(day) {
    switch (day) {
    case '2019-09-23-27':
      return '23 a 27 de setembro';
    case '2019-09-27':
      return '27 de setembro';
    case '2019-09-28':
      return '28 de setembro';
    case '2019-09-29':
      return '29 de setembro';
    case '2019-09-30':
      return '30 de setembro';
    case '2019-10-01':
      return '01 de outubro';
    case '2019-10-02':
      return '02 de outubro';
    case '2019-10-03':
      return '03 de outubro';
    case '2019-10-04':
      return '04 de outubro';
    case '2019-10-05':
      return '05 de outubro';
    case '2019-10-06':
      return '06 de outubro';
    case '2019-10-07':
      return '07 de outubro';
    case '2019-10-08':
      return '08 de outubro';
    case '2019-10-09':
      return '09 de outubro';
    }
  }

  getEvent(node, noTime = false) {
    return (
      <Event
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
        noTime={noTime}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.props.events.map((event, i) => (
          <React.Fragment>
            <HeadingContainer className='sticky'>
              <Heading>
                {this.transformHeading(event.edges[0].node.acf.days)}
              </Heading>
            </HeadingContainer>
            {event.edges.map(({ node }, j) => (
              <div key={j}>
                {node.acf.time ?
                  <React.Fragment>
                    <SubheadingContainer className='sub-sticky'>
                      <Subheading>{node.acf.time}
                      </Subheading>
                    </SubheadingContainer>
                    <Pusher>
                      {this.getEvent(node)}
                    </Pusher>
                  </React.Fragment>
                  : 
                  this.getEvent(node, true)
                }
              </div>
            ))}
          </React.Fragment>
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
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

const SubheadingContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: sticky;
  z-index: 1;
  height: 2.5em;
  width: 5.5em;
  margin-top: 3em;
  padding: 0 .666em;
  background-color: ${colors.grayLighter};
  border-radius: .5em;
  box-shadow: 0 1px 2px rgba(29,29,27,0.2);
`;

const Subheading = styled.h3`
  margin: 0 auto;
  font-size: 1.333em;
  color: ${colors.blue};
`;

const Pusher = styled.div`
  margin-top: -4.5em;
`;

export default Events;