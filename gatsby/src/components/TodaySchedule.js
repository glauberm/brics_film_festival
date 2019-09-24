import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import Schedule from './Schedule';
import { colors, bigButtonStyle } from '../styles/theme';

class TodaySchedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      today: null
    };
  }

  componentDidMount() {
    const now = new Date();
    const fullYear = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();

    this.setState({
      today: `${fullYear}-${month}-${date}`
    });
  }

  handleToday(day) {
    switch (this.state.today) {
    case '2019-8-23':
    case '2019-8-24':
    case '2019-8-25':
    case '2019-8-26':
    case '2019-8-27':
      return (day === '2019-09-23/2019-09-27');
    case '2019-8-30':
      return (day === '2019-09-30');
    case '2019-9-1':
      return (day === '2019-10-01');
    case '2019-9-2':
      return (day === '2019-10-02');
    case '2019-9-3':
      return (day === '2019-10-03');
    case '2019-9-4':
      return (day === '2019-10-04');
    case '2019-9-5':
      return (day === '2019-10-05');
    case '2019-9-6':
      return (day === '2019-10-06');
    case '2019-9-7':
      return (day === '2019-10-07');
    case '2019-9-8':
      return (day === '2019-10-08');
    case '2019-9-9':
      return (day === '2019-10-09');
    }
  }

  render() {
    if (this.state.today) {
      let todayEvents;
      this.props.schedule.map((events) => {
        if (this.handleToday(events.edges[0].node.acf.days)) {
          todayEvents = [events];
        }
      });

      if (todayEvents && todayEvents.length) {
        return (
          <React.Fragment>
            <Schedule
              schedule={todayEvents}
              films={this.props.films}
              title={this.props.intl.formatMessage({ id: 'todayAtTheFestival' })}
            />
            <LinkButton>
              <Link to={this.props.intl.formatMessage({ id: 'navigationScheduleHref' })}>
                <Button>
                  {this.props.intl.formatMessage({ id: 'seeFullSchedule' })}
                </Button>
              </Link>
            </LinkButton>
          </React.Fragment>
        );
      }
    }

    return null;
  }
}

const LinkButton = styled.div`
  a,
  a:hover,
  a:focus,
  a:active {
    color: ${colors.black};
    text-decoration: none;
  }
`;

const Button = styled.button`
  margin: -1em auto 3em;
  ${bigButtonStyle}
`;

export default injectIntl(TodaySchedule);