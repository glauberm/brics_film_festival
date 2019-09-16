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