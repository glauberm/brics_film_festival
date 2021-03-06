import React from 'react';
import { injectIntl } from 'react-intl';

import Label from './Label';
import { FormControl } from '../../styles/form';

class Select extends React.PureComponent {
  render() {
    return (
      <FormControl>
        <label>
          <Label
            label={this.props.label}
            notRequired={this.props.notRequired}
          />
          <select
            name={this.props.label}
            value={this.props.value}
            required={this.props.notRequired ? false : true}
            onChange={this.props.onValueChange}
          >
            <option disabled value=''>
              {this.props.intl.formatMessage({ id: 'selectDefaultValue' })}
            </option>
            { this.props.options.map((option, key) => (
              <option key={key} value={option}>
                {this.props.intl.formatMessage({ id: option })}
              </option>
            ))}
          </select>
        </label>
      </FormControl>
    );
  }
}

export default injectIntl(Select);