'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      webpack: {
        module: {
          rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    url: {
                      filter: (url) => {
                        if (url.includes('data:image')) {
                          return false;
                        }

                        return true;
                      },
                    },
                  },
                },
                'sass-loader',
              ],
            },
          ],
        },
      },
    },
  });

  return app.toTree();
};
