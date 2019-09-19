import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors, breakpoints } from '../styles/theme';

class Event extends React.PureComponent {
  getHeading() {
    if (this.props.activity) {
      return (
        <Link to={
          this.props.intl.formatMessage({ id: 'navigationActivitiesHref' })
          + this.props.activity
        }>
          {this.props.title}
        </Link>
      );
    }

    if (this.props.screening) {
      return (
        <Link to={
          this.props.intl.formatMessage({ id: 'navigationScreeningsHref' })
          + this.props.screening
        }>
          {this.props.title}
        </Link>
      );
    }

    return this.props.title;
  }

  render() {
    return (
      <Container>
        <Heading noTime={this.props.noTime} className='title'>
          {this.getHeading()}
          {this.props.subtitle &&
            <React.Fragment>
              <br/>
              <small>{this.props.subtitle}</small>
            </React.Fragment>
          }
        </Heading>
        {this.props.duration &&
          <React.Fragment>
            <Subheading>Duração</Subheading>
            <span>{this.props.duration}</span>
            <br/>
          </React.Fragment>
        }
        {this.props.parentalRating &&
          <React.Fragment>
            <Subheading>Classificação Indicativa</Subheading>
            <span>{this.props.parentalRating}</span>
            <br/>
          </React.Fragment>
        }
        <Subheading>Local</Subheading>
        <span>{this.props.venue}</span>
        {this.props.films &&
          <React.Fragment>
            <FilmSubheading>Filmes</FilmSubheading>
            <List>
              {this.props.films.map((film, i) => (
                <li key={i}>
                  <span>{film.post_title}</span>
                  {/* <Link to={film.post_name}>
                    {film.post_title}
                  </Link> */}
                </li>
              ))}
            </List>
          </React.Fragment>
        }
        {this.props.obs &&
          <p>{this.props.obs}</p>
        }
      </Container>
    );
  }
}

const Container = styled.article`
  margin-top: 2em;
  margin-bottom: 0 !important;
  padding: 0 1em 1em;
  border-top: 1px solid ${colors.grayLightest};
  border-left: 1px solid ${colors.grayLighter};
  border-right: 1px solid ${colors.grayLighter};
  border-bottom: 1px solid ${colors.grayLight};
  border-radius: 1em;
  background-color: ${colors.white};
  box-shadow:
    0 2px 2px -2px ${colors.grayLightest},
    0 1px 1px ${colors.grayLightest},
    0 0 .333em ${colors.grayLightest} inset
  ;

  .title {
    ::after {
      content: none;
    }
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

const Heading = styled.h4`
  margin-top: .2em;
  margin-bottom: 0;
  padding-left: 0;
  font-size: 1.425em;

  ${props => !props.noTime ? css`
    padding-top: 2em;
    ` : ''}

  @media (min-width: ${breakpoints.sm}px) {
    margin-top: .666em;
    padding-top: 0;

    ${props => !props.noTime ? css`
      padding-left: 4em;
    ` : ''}
  }
`;

const Subheading = styled.h5`
  display: inline-block;
  margin: 0;
  font-size: 1em;

  ::after {
    content: ':';
    margin-right: .5em;
  }
`;

const FilmSubheading = styled.h5`
  margin: .333em 0 0;
  font-size: 1em;

  ::after {
    content: ':';
  }
`;

const List = styled.ul`
  margin: .5em 0 0;

  li {
    margin-bottom: .25em;
    font-weight: bold;
    color: ${colors.orange};

    span {
      color: ${colors.blackLight};
    }
  }
`;

export default injectIntl(Event);