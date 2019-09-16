import React from 'react';
import { injectIntl } from 'react-intl';

import { FormControl } from '../../styles/form';

class Select extends React.PureComponent {
  render() {
    return (
      <FormControl>
        <label>
          <span>{this.props.intl.formatMessage({ id: this.props.label })}</span>
          <select
            name={this.props.label}
            value={this.props.value}
            required={this.props.notRequired ? false : true}
            onChange={this.props.handleChange}
            defaultValue=''
          >
            <option disabled value=''>
              {this.props.intl.formatMessage({ id: 'selectDefaultValue' })}
            </option>
            { this.props.options.map(option => {
              <option value={option}>
                {this.props.intl.formatMessage({ id: option })}
              </option>;
            })}
          </select>
        </label>
      </FormControl>
    );
  }
}

export default injectIntl(Select);