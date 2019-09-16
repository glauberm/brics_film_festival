import React from 'react';
import { injectIntl } from 'react-intl';

import Label from './Label';
import { FormControl } from '../../styles/form';

class Message extends React.PureComponent {
  render() {
    return (
      <FormControl>
        <label>
          <Label />
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