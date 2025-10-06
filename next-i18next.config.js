/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
  },
  defaultNS: 'home',
  ns: ['home', 'projects'],   
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
