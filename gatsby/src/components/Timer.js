import React from 'react';
import styled from '@emotion/styled';
import countdown from 'countdown';
import { injectIntl } from 'react-intl';

import { colors } from '../styles/theme';

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      timespan: {},
      started: true
    };
  }

  componentDidMount() {
    this.setCountdown();
    this.interval = setInterval(this.setCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setCountdown = () => {
    const date = new Date(2019, 8, 23);
    const now = new Date();
    
    if (now < date) {
      this.setState({
        timespan: countdown(date),
        started: false
      });
    } else {
      this.setState({
        started: true
      });
      clearInterval(this.interval);
    }
  }

  render() {
    const timespan = this.state.timespan;

    return (
      this.state.started ?
        <Container>
          <Item>
            <Number>5</Number>
            <Label>{this.props.intl.formatMessage({ id: 'countries' })}</Label>
          </Item>
          <Item>
            <Number>17</Number>
            <Label>{this.props.intl.formatMessage({ id: 'days' })}</Label>
          </Item>
          <Item>
            <Number>54</Number>
            <Label>{this.props.intl.formatMessage({ id: 'films' })}</Label>
          </Item>
          <Item>
            <Number>4</Number>
            <Label>{this.props.intl.formatMessage({ id: 'screenings' })}</Label>
          </Item>
          <Item>
            <Number>7</Number>
            <Label>{this.props.intl.formatMessage({ id: 'activities' })}</Label>
          </Item>
        </Container>
        :
        <Container>
          <Item>
            <Number>{timespan.months !== undefined ? timespan.months : '?'}</Number>
            <Label>{this.props.intl.formatMessage({ id: 'months' })}</Label>
          </Item>
          <Item>
            <Number>{timespan.days !== undefined ? timespan.days : '?'}</Number>
            <Label>{this.props.intl.formatMessage({ id: 'days' })}</Label>
          </Item>
          <Item>
            <Number>{timespan.hours !== undefined ? timespan.hours : '?'}</Number>
            <Label>{this.props.intl.formatMessage({ id: 'hours' })}</Label>
          </Item>
          <Item>
            <Number>{timespan.minutes !== undefined ? timespan.minutes : '?'}</Number>
            <Label>{this.props.intl.formatMessage({ id: 'minutes' })}</Label>
          </Item>
          <Item>
            <Number>{timespan.seconds !== undefined ? timespan.seconds : '?'}</Number>
            <Label>{this.props.intl.formatMessage({ id: 'seconds' })}</Label>
          </Item>
        </Container>
    );
  }
}

const Container = styled.div`
  display: block;
  width: 100%;
  font-size: 0.8em;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(29,29,27,0.025), 0 2px 5px rgba(29,29,27,0.125);
`;

const Item = styled.div`
  display: inline-block;
  width: 20%;
  text-align: center;

  :nth-of-type(1) { background-color: ${colors.green}; }
  :nth-of-type(2) { background-color: ${colors.blue}; }
  :nth-of-type(3) { background-color: ${colors.orange}; }
  :nth-of-type(4) { background-color: ${colors.red}; }
  :nth-of-type(5) { background-color: ${colors.yellow}; }
`;

const Number = styled.span`
  display: block;
  padding: 0.5em 0;
  font-size: 2.25em;
  color: ${colors.white};
  line-height: 1;
  text-shadow: 0 0 2px rgba(29,29,27,0.2), 0 0 10px rgba(29,29,27,0.5);
  box-shadow:
    0 -2em 2em -2em rgba(29,29,27,0.25) inset
  ;
`;

const Label = styled.span`
  display: block;
  padding: 0.4em 0.6em 0;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  line-height: 1;
  text-transform: uppercase;
  background-color: ${colors.white};
  color: ${colors.black};
  font-weight: 700;
`;

export default injectIntl(Timer);