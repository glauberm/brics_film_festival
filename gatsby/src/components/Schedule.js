import React from 'react';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import ScheduleEvent from './ScheduleEvent';
import { colors, breakpoints } from '../styles/theme';

class Schedule extends React.PureComponent {
  getFilms(eventFilms) {
    if (!eventFilms || !this.props.films) return;
    let films = [];
    
    this.props.films.edges.forEach(({ node }) => {
      for (let i = 0; i < eventFilms.length; i++) {
        if (eventFilms[i].wordpress_id === node.wordpress_id) {
          films.push({node});
          break;
        }
      }
    });

    return films;
  }

  render() {
    return (
      <Container>
        {this.props.schedule.map((events, i) => (
          <React.Fragment key={i}>
            <HeadingContainer className='sticky'>
              { this.props.title ?
                <Heading>{this.props.title}</Heading>
                :
                <Heading>
                  {this.props.intl.formatMessage({
                    id: events.edges[0].node.acf.days
                  })}
                </Heading>
              }
            </HeadingContainer>
            {events.edges.map(({ node }, j) => (
              <ScheduleEvent
                key={j}
                date={events.edges[0].node.acf.days}
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
                films={this.getFilms(node.acf.films)}
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

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: -1em;
    left: 0;
    height: 2em;
    width: 100%;
    background: linear-gradient(
      to top, ${colors.white} 50%, transparent 100%
    );
  }
`;

const Heading = styled.h2`
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
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

export default injectIntl(Schedule);