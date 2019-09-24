export const colors = {
  red: '#e7332a',
  orange: '#f9b234',
  yellow: '#ffde00',
  green: '#009641',
  blue: '#284693',
  black: '#1d1d1b',
  blackLight: '#383833',
  white: '#ffffff',
  gray: '#93938a',
  grayDark: '#656552',
  grayLight: '#dfdfdd',
  grayLighter: '#efefee',
  grayLightest: '#f5f5ef'
};

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const containerSize = '85em';

export const linkBaseStyle = `
  color: ${colors.green};
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-color: ${colors.orange};
  }

  :active {
    color: ${colors.orange};
    text-decoration: none;
  }
`;

export const headingBaseStyle = `
  font-family: "Montserrat", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 700;
  line-height: 1.2;
`;

export const bigButtonStyle = `
  ${headingBaseStyle}
  max-width: 90%;
  padding: 0.75em 2.5em;
  background-color: ${colors.orange};
  color: ${colors.blackLight};
  border: 0 none;
  border-radius: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.25em;
  transition: background-color 0.3s ease;
  box-shadow:
    0 0 1px rgba(29,29,27,0.075),
    0 1px 2px rgba(29,29,27,0.175),
    0 -2em 2em -2em rgba(29,29,27,0.125) inset
  ;

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
      0 .075em .25em -2em rgba(29,29,27,0.125) inset,
      0 2px 2px 2px rgba(29,29,27,0.175) inset
    ;
  }
`;