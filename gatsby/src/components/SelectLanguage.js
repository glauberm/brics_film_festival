import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { colors, breakpoints } from '../styles/theme';

class SelectLanguage extends React.PureComponent {
  render() {
    return (
      <List>
        <ListItem itemScope itemType="http://schema.org/Language">
          <Link
            to={this.props.langPt ? this.props.langPt : '/pt/'}
            activeClassName='active'
            partiallyActive={true}
            lang='pt-BR'
            aria-label='Página em Português'
            title='Página em Português'
          >
            <Item itemProp="name">PT</Item>
          </Link>
        </ListItem>
        <ListItem itemScope itemType="http://schema.org/Language">
          <Link
            to={this.props.langEn ? this.props.langEn : '/en/'}
            activeClassName='active'
            partiallyActive={true}
            lang='en'
            aria-label='Page in English'
            title='Page in English'
          >
            <Item itemProp="name">EN</Item>
          </Link>
        </ListItem>
      </List>
    );
  }
}

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  + li {
    margin-left: 1em;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    height: 2em;
    border: 2px solid ${colors.white};
    border-radius: 2em;
    font-weight: 700;
    text-transform: uppercase;
    opacity: .5;
    transition: opacity 0.3s ease;

    @media (min-width: ${breakpoints.md}px) {
      width: 2.25em;
      height: 2.25em;
    }

    :hover,
    :focus,
    :active {
      opacity: 1;
    }
  }

  .active {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

const Item = styled.span`
  position: relative;
  line-height: 1px;
`;

export default SelectLanguage;