import React from 'react';
import { injectIntl } from 'react-intl';

class Label extends React.PureComponent {
  render() {
    return (
      <span>
        {this.props.intl.formatMessage({ id: this.props.label })}
        {this.props.notRequired &&
          <React.Fragment>
            <br/><small>({this.props.intl.formatMessage({ id: this.props.notRequired })})</small>
          </React.Fragment>
        }
      </span>
    );
  }
}

export default injectIntl(Label);