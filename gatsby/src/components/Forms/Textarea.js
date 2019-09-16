import React from 'react';
import { injectIntl } from 'react-intl';

import { FormControl } from '../../styles/form';

class Message extends React.PureComponent {
  render() {
    return (
      <FormControl>
        <label>
          <span>{this.props.intl.formatMessage({ id: this.props.label })}</span>
          <textarea
            required
            name={this.props.label}
            value={this.props.value}
            onChange={this.props.handleChange}
          ></textarea>
        </label>
      </FormControl>
    );
  }
}

export default injectIntl(Message);