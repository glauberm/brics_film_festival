import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors } from '../styles/theme';

class Breadcrumb extends React.PureComponent {
  render() {
    return (
      <Nav aria-label={this.props.intl.formatMessage({ id: 'breadcrumbLabel' })}>
        <List itemScope itemType="http://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <Link
              to={this.props.intl.formatMessage({ id: 'navigationHomeHref' })}
              activeClassName='active'
              itemProp="item"
            >
              <span itemProp="name">
                {this.props.intl.formatMessage({ id: 'navigationHomeText' })}
              </span>
              <meta itemProp="position" content="1" />
            </Link>
          </li>
          {this.props.crumbs.map((crumb, i) => (
            <li key={i} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
              <Link
                to={crumb.href}
                activeClassName='active'
                itemProp="item"
              >
                <span itemProp="name">
                  {crumb.text}
                </span>
                <meta itemProp="position" content={i+2} />
              </Link>
            </li>
          ))}
        </List>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  border-radius: 2em;
  border: 1px solid ${colors.grayLighter};
  overflow-x: auto;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${colors.grayLight} ${colors.white};

  ::-webkit-scrollbar {
    height: 6px;
    background-color: ${colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.grayLight};
  }
`;

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;

  li {
    display: block;
    padding: 0.5em 0.25em;

    :first-of-type {
      padding-left: 1.25em;
    }

    :last-of-type {
      padding-right: 1.25em;
    }

    + li::before {
      content: '/';
      margin-right: 0.5em;
      color: ${colors.gray};
      font-weight: 400;
    }

    a {
      white-space: nowrap;
    }

    .active {
      font-weight: 700;
    }
  }
`;

export default injectIntl(Breadcrumb);