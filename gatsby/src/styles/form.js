import styled from '@emotion/styled';
import { colors, breakpoints, headingBaseStyle } from '../styles/theme';

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.sm}px) {
    flex-wrap: nowrap;
  }

  > div {
    width: 100%;

    @media (min-width: ${breakpoints.sm}px) {
      width: 48.75%;
    }
  }
`;

export const FormControl = styled.div`
  display: block;
  margin-bottom: 2em;

  label {
    display: block;
    width: 75%;

    :last-of-type {
      width: 100%;
    }

    span {
      ${headingBaseStyle}
      display: block;
      margin-left: 0.5em;
      color: ${colors.blackLight};
      margin-bottom: 0.5em;

      small {
        color: ${colors.grayDark};
      }
    }
  }

  input, select, textarea {
    width: 100%;
    height: 2em;
    font-size: 1em;
    line-height: 1.5;
    border: 1px solid ${colors.grayLightest};
    border-top-color: ${colors.grayLight};
    border-radius: 2em;
    background-color: ${colors.grayLightest};
    box-shadow: 0 2px 2px -2px ${colors.grayLighter} inset;

    :focus,
    :active {
      outline: none;
      box-shadow: none;
      border-color: ${colors.orange};
      background-color: ${colors.white};
    }
  }

  input, select {
    height: 3em;
    padding: 0.5em 1em;
  }

  textarea {
    height: 8em;
    padding: 0.5em 1em;
    resize: vertical;
  }
`;