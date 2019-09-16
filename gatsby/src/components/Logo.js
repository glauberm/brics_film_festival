import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { breakpoints, colors, linkBaseStyle, headingBaseStyle } from '../styles/theme';

class Logo extends React.PureComponent {
  render() {
    return (
      <Container>
        <Link to={this.props.intl.formatMessage({ id: 'navigationHomeHref' })}>
          {(this.props.pathname == '/pt/' || this.props.pathname == '/en/') ? (
            <Heading>
              <Image>
                {this.props.children}
              </Image>
            </Heading>
          ) : (
            <Text>
              <Image>
                {this.props.children}
              </Image>
            </Text>
          )}
        </Link>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  max-width: 100%;
  width: 62.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em 0;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${breakpoints.sm}px) {
    padding: 0 2em 0;
  }

  a {
    ${linkBaseStyle}
    display: block;
    width: 100%;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 2em;
`;

const Text = styled.span`
  ${headingBaseStyle}
  font-size: 2em;
`;

const Image = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  color: ${colors.green};

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default injectIntl(Logo);