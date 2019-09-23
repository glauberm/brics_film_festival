import styled from '@emotion/styled';

import { colors } from './theme';

export const Aside = styled.aside`
  h3 {
    margin-top: 2em;
  }

  small {
    font-size: 100%;
    display: inline-block;
    margin-bottom: 0.25em;
    color: ${colors.grayDark};
  }

  dl {
    margin-left: 1em;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 1em;
  }
`;