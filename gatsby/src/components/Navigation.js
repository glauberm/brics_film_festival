import React from 'react';
import { Link } from 'gatsby';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors, breakpoints, containerSize } from '../styles/theme';
import Decoration from './Decoration';
import { navigationLinks } from '../data/navigation';
import logo from '../images/icon.svg';

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      transition: false
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    let timeoutFadeOut;
    let timeoutFadeIn;

    const fadeOut = () => {
      this.setState({ fixed: false });
      clearTimeout(timeoutFadeOut);
    };

    const fadeIn = () => {
      this.setState({ transition: false });
      clearTimeout(timeoutFadeIn);
    };

    if (this.state.transition == true) {
      timeoutFadeOut = setTimeout(fadeOut, 250);
      timeoutFadeIn = setTimeout(fadeIn, 250);
    }
  }

  handleScroll = () => {
    const el = document.getElementById('main-nav');
    const wrapper = document.getElementById('main-nav-wrapper');
    const elRect = el.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();

    if (!this.state.fixed) {
      wrapper.style.height = elRect.height + 'px';
      this.setState({
        fixed: (elRect.bottom + elRect.height * 3) < elRect.height
      });
    } else if (wrapperRect.bottom >= 0) {
      this.setState({ transition: true });
    }
  }

  render() {
    const links = navigationLinks(this.props.intl);

    return (
      <Wrapper id="main-nav-wrapper">
        <Container id="main-nav" fixed={this.state.fixed} transition={this.state.transition}>
          <Nav aria-label={this.props.intl.formatMessage({ id: 'navigationLabel' })}>
            <List>
              {links.map((link, i) =>
                <React.Fragment key={i}>
                  {i == 0 && 
                    <LogoListItem fixed={this.state.fixed} transition={this.state.transition}>
                      <Link
                        to={link.href}
                        activeClassName='active'
                      >
                        <Logo src={logo} alt={link.text} />
                      </Link>
                    </LogoListItem>
                  }
                  <ListItem fixed={this.state.fixed}>
                    <Link
                      to={link.href}
                      activeClassName='active'
                      partiallyActive={ i == 0 ? false : true}
                    >
                      <span>{link.text}</span>
                    </Link>
                  </ListItem>
                </React.Fragment>
              ) }
            </List>
          </Nav>
          <DecorationContainer>
            <Decoration emboss={true} />
          </DecorationContainer>
        </Container>
      </Wrapper>
    );
  }
}

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(1em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  opacity: 1;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  transition: opacity 0.25s ease-in, transform 0.25s ease-in;

  ${props => props.transition ? css`
    opacity: 0;
    transform: translateY(1em);
  `: ''}
  
  ${props => props.fixed ? css`
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    background-color: ${colors.blackLight};
    background: radial-gradient(
      farthest-corner at top center,
      ${colors.blackLight},
      ${colors.black}
    );
    box-shadow: 0 2px 5px rgba(29,29,27,0.2), 0 10px 10px rgba(29,29,27,0.5);
    animation-name: ${slideDown};

    ::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      top: 0;
      background: linear-gradient(
        to right,
        transparent 0%,
        ${colors.grayDark} 50%,
        transparent 100%
      );
    }
  `: ''}
`;

const Nav = styled.nav`
  color: ${colors.white};
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: ${colors.gray} ${colors.grayDark};

  ::-webkit-scrollbar {
    height: 6px;
    background-color: ${colors.grayDark};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
  }
`;

const List = styled.ul`
  max-width: ${containerSize};
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  @media (min-width: ${breakpoints.lg}px) {
    width: 80%;
    justify-content: space-around;
  }
`;

const ListItem = styled.li`
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${props => props.fixed || props.transition ? css`
    opacity: 0;
    transform: translateY(1em);
    animation-name: ${fadeInTop};
  `: ''}

  span {
    position: relative;
    z-index: 1;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    display: block;
    position: relative;
    padding: 0.75em;
    white-space: nowrap;

    @media (min-width: ${breakpoints.sm}px) {
      padding: 1em 1.5em;
    }

    :hover,
    :focus,
    :active {
      ::before, ::after {
        opacity: 1;
      }
    }

    ::before, ::after {
      transition: opacity 0.3s ease;
    }

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      background: radial-gradient(
        3em 1.333em at center bottom,
        ${colors.blackLight}, transparent
      );
      opacity: 0;
    }

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: transparent;
      background: linear-gradient(
        to right,
        transparent 0%,
        ${colors.gray} 50%,
        transparent 100%
      );
      opacity: 0;
    }
  }

  .active {
    font-weight: 700;

    ::before, ::after {
      opacity: 1;
    }
  }
`;

const LogoListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  animation-duration: 0.5s;

  ${props => props.fixed ? css`
    display: block;

    + li {
      display: none;
    }
  `: ''}

  a {
    display: flex;
    justify-content: center;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Logo = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  min-width: 50px;
  height: 4em;
  padding: 0.5em;

  @media (min-width: ${breakpoints.sm}px) {
    max-width: 73px;
    height: 6em;
  }
`;

const DecorationContainer = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
`;

export default injectIntl(Navigation);