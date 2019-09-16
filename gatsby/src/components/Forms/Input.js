import React from 'react';
import { injectIntl } from 'react-intl';

import { FormControl } from '../../styles/form';

class Input extends React.PureComponent {
  render() {
    return (
      <FormControl>
        <label>
          <span>{this.props.intl.formatMessage({ id: this.props.label })}</span>
          <input
            name={this.props.label}
            type={this.props.type ? this.props.type : 'text'}
            value={this.props.value}
            required={this.props.notRequired ? false : true}
            onChange={this.props.handleChange}
          />
        </label>
      </FormControl>
    );
  }
}

export default injectIntl(Input);