import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors, breakpoints } from '../styles/theme';

class FilmGrid extends React.PureComponent {
  render() {
    return (
      <List>
        {this.props.films.map((film, i) => (
          <ListItem key={i}>
            <Link
              to={`${this.props.intl.formatMessage({ id: 'navigationScreeningsHref'} )}${film.acf.screening.post_name}/${film.slug}/`}
            >
              <Image
                src={film.acf.image.localFile.childImageSharp.resize.src}
                alt=''
                width='355'
                height='172.5'
              />
              <FilmTitle>{film.title}</FilmTitle>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  }
}

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 1em;
  list-style: none;
  margin: 1em 0 0;
  padding: 0;

  @media (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;

  a {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-weight: bold;
    border-radius: .25em;
    background-color: ${colors.grayLighter};
    color: ${colors.blue};
    transition: background-color 0.3s ease, color 0.3s ease;

    :hover,
    :focus {
      text-decoration: none;
      background-color: ${colors.blue};
      color: ${colors.white}
    }
  }

  a:hover,
  a:focus {
    img {
      opacity: 0.5;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: .25em .25em 0 0;
  transition: opacity 0.3s ease;
`;

const FilmTitle = styled.h6`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: .375em .5em .5em;
  font-size: 1em;
`;

export default injectIntl(FilmGrid);