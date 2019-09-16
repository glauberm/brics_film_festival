import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { breakpoints, colors, headingBaseStyle } from '../styles/theme';
import Decoration from './Decoration';

class Jumbotron extends PureComponent {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
        <DecorationContainer>
          <Decoration />
        </DecorationContainer>
        <Text>{this.props.text}</Text>
        {this.props.linkTo && this.props.linkText && 
          <LinkContainer>
            <Link to={this.props.linkTo}>
              {this.props.linkText}
            </Link>
          </LinkContainer>
        }
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 1em;

  h1 {
    line-height: 1;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  margin: 0.5em 0 0.25em;
  font-size: 4em;

  @media (min-width: ${breakpoints.sm}px) {
    font-size: 5em;
  }
`;

const Subtitle = styled.p`
  ${headingBaseStyle}
  color: ${colors.green};
  font-size: 1.5em;
  margin: 0 0 1.25em;
`;

const DecorationContainer = styled.div`
  height: 6px;
  width: 25%;
  margin: 0 auto;
  position: relative;

  @media (min-width: ${breakpoints.sm}px) {
    width: 15%;
  }
`;

const Text = styled.p`
  font-size: 1.25em;
  margin-bottom: 2em;
`;

const LinkContainer = styled.div`
  margin-bottom: 2em;
`;

export default Jumbotron;