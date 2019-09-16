import styled from '@emotion/styled';
import { colors, breakpoints, headingBaseStyle } from '../styles/theme';

const Message = styled.div`
  display: block;
  padding: 0.75em 1.25em;
  border-top: 1px solid ${colors.grayLightest};
  border-left: 4px solid ${colors.grayLighter};
  border-right: 1px solid ${colors.grayLighter};
  border-bottom: 1px solid ${colors.grayLight};
  border-radius: 4px;
  background-color: ${colors.white};
  box-shadow: 0 1px 1px 0 ${colors.grayLightest};
`;

export const ErrorMessage = styled(Message)`
  color: ${colors.red};
  border-left-color: ${colors.red};
`;

export const SuccessMessage = styled(Message)`
  color: ${colors.green};
  border-left-color: ${colors.green};
`;

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

export const Button = styled.button`
  ${headingBaseStyle}
  padding: 0.75em 2.5em;
  margin: 0 auto;
  background-color: ${colors.orange};
  color: ${colors.black};
  border: 0 none;
  border-radius: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.25em;
  transition: background-color 0.3s ease;
  box-shadow: 0 -2em 2em -2em rgba(29,29,27,0.25) inset;
  
  :hover,
  :focus,
  :active {
    outline: none;
  }

  :hover,
  :focus {
    background-color: ${colors.yellow};
  }

  :active {
    box-shadow:
      0 -2em 2em -2em rgba(29,29,27,0.25) inset,
      0 2px 2px 2px rgba(29,29,27,0.175) inset
    ;
  }
`;