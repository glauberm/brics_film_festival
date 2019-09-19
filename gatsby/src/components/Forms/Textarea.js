import React from 'react';
import { injectIntl } from 'react-intl';

import Label from './Label';
import { FormControl } from '../../styles/form';

class Message extends React.PureComponent {
  render() {
    return (
      <FormControl>
        <label>
          <Label
            label={this.props.label}
          />
          <textarea
            name={this.props.label}
            value={this.props.value}
            // required={this.props.notRequired ? false : true}
            onChange={this.props.onValueChange}
          ></textarea>
        </label>
      </FormControl>
    );
  }
}

export default injectIntl(Message);