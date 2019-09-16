import React from 'react';
import { injectIntl } from 'react-intl';

import Label from './Label';
import { FormControl } from '../../styles/form';

class Input extends React.PureComponent {
  render() {
    return (
      <FormControl>
        <label>
          <Label />
          <input
            name={this.props.label}
            type={this.props.type ? this.props.type : 'text'}
            value={this.props.value}
            required={this.props.notRequired ? false : true}
            onChange={this.props.handleChange}
            {...this.props}
          />
        </label>
      </FormControl>
    );
  }
}

export default injectIntl(Input);