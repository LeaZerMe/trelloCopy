"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (body, title, initialState) {
  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <script>window.__STATE__ = " + JSON.stringify(initialState) + "</script>\n        <title>" + title + "</title>\n        <link rel=\"stylesheet\" href=\"/css/style.css\" />\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\n      </head>\n      \n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n      \n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
};