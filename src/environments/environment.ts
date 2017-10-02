// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  token_auth_config: {
    apiBase: 'https://yoadopto-api-fedearribas.c9users.io'
  },
  base_url_api_adoptions: 'https://yoadopto-api-fedearribas.c9users.io/adoptions',
  base_url_api_comments: 'https://yoadopto-api-fedearribas.c9users.io/comments',
  base_url_api_marked_adoptions: 'https://yoadopto-api-fedearribas.c9users.io/marked_adoptions/'
};
