// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  name: 'production',
  production: false,
  version: '1.0',
  rollbar_key: '',
  date_format: 'DD MM YY HH:mm:ss',
  api: {
    client_id:     '3852a711471790556ec0d3add8b9c338c64cce16aa9bc118',
    client_secret: 'f8d09d6ddb156ca759b001974d1b93d4fda3037de1671733',
    host:          'http://localhost:8042/back',
    token_path:    '/oauth/v2/token'
  },

};
