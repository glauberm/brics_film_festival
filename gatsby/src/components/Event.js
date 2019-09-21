import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors } from '../styles/theme';

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
        { this.props.time &&
          <HeadingContainer className='sub-sticky'>
            <Heading>{this.props.time}</Heading>
          </HeadingContainer>
        }
        <Subheading noTime={this.props.noTime}>
          {this.getHeading()}
          {this.props.subtitle &&
            <React.Fragment>
              <br/>
              <small>{this.props.subtitle}</small>
            </React.Fragment>
          }
        </Subheading>
        <Content>
          {this.props.duration &&
            <React.Fragment>
              <Subsubheading>
                {this.props.intl.formatMessage({ id: 'duration' })}
              </Subsubheading>
              <span>{this.props.duration}</span>
              <br/>
            </React.Fragment>
          }
          {this.props.parentalRating &&
            <React.Fragment>
              <Subsubheading>
                {this.props.intl.formatMessage({ id: 'parentalRating' })}
              </Subsubheading>
              <span>{this.props.parentalRating}</span>
              <br/>
            </React.Fragment>
          }
          <Subsubheading>
            {this.props.intl.formatMessage({ id: 'venue' })}
          </Subsubheading>
          <span>{this.props.venue}</span>
          {this.props.films &&
            <React.Fragment>
              <FilmSubsubheading>
                {this.props.intl.formatMessage({ id: 'films' })}
              </FilmSubsubheading>
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
        </Content>
      </Container>
    );
  }
}

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  margin-bottom: 0 !important;
  padding: 0.75em 1em 0;
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

  p:last-of-type {
    margin-bottom: 0;
  }
`;

const HeadingContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: sticky;
  z-index: 1;
  margin-right: 1em;
  margin-top: .25em;
  margin-bottom: .25em;
  padding: 0.333em .666em;
  background-color: ${colors.yellow};
  border-radius: .333em;
`;

const Heading = styled.h3`
  margin: 0 auto;
  font-size: 1.333em;
  color: ${colors.blackLight};
`;

const Subheading = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0.375em;
  font-size: 1.425em;

  a {
    color: ${colors.black};

    :hover,
    :focus {
      text-decoration-color: ${colors.green};
    }
  }

  small {
    color: ${colors.grayDark};
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 1em 0;
`;

const Subsubheading = styled.h5`
  display: inline-block;
  margin: 0;
  font-size: 1em;

  ::after {
    content: ':';
    margin-right: .5em;
  }
`;

const FilmSubsubheading = styled.h5`
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