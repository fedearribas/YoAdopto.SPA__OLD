export const environment = {
  production: true,
  token_auth_config: {
    apiBase: 'https://yoadoptoapi.herokuapp.com',
    oAuthBase: 'https://yoadoptoapi.herokuapp.com',
    oAuthWindowType: 'sameWindow',
    oAuthPaths: {
      facebook: 'auth/facebook'
  },
    oAuthCallbackPath: 'oauth_callback',
  },
  base_url_api_publications: 'https://yoadoptoapi.herokuapp.com/publications',
  base_url_api_comments: 'https://yoadoptoapi.herokuapp.com/comments',
  base_url_api_marked_publications: 'https://yoadoptoapi.herokuapp.com/marked_publications/'
};
