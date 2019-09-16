export const baseUrl = 'https://bricsfilmfestival.com.br';

export const recaptchaSitekey = '6LedcKwUAAAAAN5X9FG34Z4QUgt4NS_LFBVKOx5P';

export const navigationLinks = (intl) => [
  {
    href: intl.formatMessage({ id: 'navigationHomeHref' }),
    text: intl.formatMessage({ id: 'navigationHomeText' })
  },
  {
    href: intl.formatMessage({ id: 'navigationFestivalHref' }),
    text: intl.formatMessage({ id: 'navigationFestivalText' })
  },
  {
    href: intl.formatMessage({ id: 'navigationScheduleHref' }),
    text: intl.formatMessage({ id: 'navigationScheduleText' })
  },
  {
    href: intl.formatMessage({ id: 'navigationScreeningsHref' }),
    text: intl.formatMessage({ id: 'navigationScreeningsText' })
  },
  {
    href: intl.formatMessage({ id: 'navigationActivitiesHref' }),
    text: intl.formatMessage({ id: 'navigationActivitiesText' })
  },
  {
    href: intl.formatMessage({ id: 'navigationCallsHref' }),
    text: intl.formatMessage({ id: 'navigationCallsText' })
  },
  {
    href: intl.formatMessage({ id: 'navigationPressHref' }),
    text: intl.formatMessage({ id: 'navigationPressText' })
  },
  {
    href: intl.formatMessage({ id: 'navigationNewsHref' }),
    text: intl.formatMessage({ id: 'navigationNewsText' })
  },
  {
    href: intl.formatMessage({ id: 'navigationVenuesHref' }),
    text: intl.formatMessage({ id: 'navigationVenuesText' })
  },
];
