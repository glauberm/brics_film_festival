import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors } from '../styles/theme';
import Section from './Section';

class PressOffice extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Section title={this.props.intl.formatMessage({ id: 'pressOfficeText' })}>
          <DescriptionList>
            <dt><h3>Flávia Clemente</h3></dt>
            <dd>{this.props.intl.formatMessage({ id: 'numberFlavia' })}</dd>
            <dd>
              <a href='mailto:flaviaclemente@id.uff.br'>
                flaviaclemente@id.uff.br
              </a>
            </dd>
            <dt><h3>Thalita Queiroz</h3></dt>
            <dd>{this.props.intl.formatMessage({ id: 'numberThalita' })}</dd>
            <dd>
              <a href='mailto:thalitanqueiroz@gmail.com'>
                thalitanqueiroz@gmail.com
              </a>
            </dd>
          </DescriptionList>
        </Section>
        <h3 className='title'>
          <a
            href={this.props.intl.formatMessage({ id: 'pressReleaseUrl' })}
            target="_blank" rel="noopener noreferrer"
          >
            {this.props.intl.formatMessage({ id: 'pressReleaseText' })}
          </a>
        </h3>
      </React.Fragment>
    );
  }
};

const DescriptionList = styled.dl`
  margin: 0;
  padding: 1px 0 0;

  dt {
    margin-top: 2em;

    :first-of-type {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 1em;
    margin-bottom: 0.5em;
    color: ${colors.grayDark};
  }

  dd {
    margin: 0 0 0 0.5em;
  }
`;

export default injectIntl(PressOffice);