import React from 'react';
import { injectIntl } from 'react-intl';

import Label from './Label';
import { FormControl } from '../../styles/form';

class Input extends React.PureComponent {
  render() {
    return (
      <FormControl>
        <label>
          <Label
            label={this.props.label}
          />
          <input
            name={this.props.label}
            type={this.props.type ? this.props.type : 'text'}
            value={this.props.value}
            min={this.props.min}
            // required={this.props.notRequired ? false : true}
            onChange={this.props.onValueChange}
          />
        </label>
      </FormControl>
    );
  }
}

export default injectIntl(Input);