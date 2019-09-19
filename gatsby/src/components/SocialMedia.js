import React from 'react';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

class SocialMedia extends React.PureComponent {
  render() {
    return (
      <List>
        <ListItem>
          <Link
            href="https://www.facebook.com/4bricsfilmfestival"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={this.props.intl.formatMessage({ id: 'facebookPage' })}
            title={this.props.intl.formatMessage({ id: 'facebookPage' })}
          >
            <Image src={facebook} alt='' />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.instagram.com/4bricsfest/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={this.props.intl.formatMessage({ id: 'instagramPage' })}
            title={this.props.intl.formatMessage({ id: 'instagramPage' })}
          >
            <Image src={instagram} alt='' />
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
    margin-left: 1.5em;
  }
`;

const Link = styled.a`
  line-height: 1px;
  opacity: .5;
  transition: opacity 0.3s ease;

  :hover,
  :focus,
  :active {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 2.25em;
  height: 2.25em;
`;

export default injectIntl(SocialMedia);