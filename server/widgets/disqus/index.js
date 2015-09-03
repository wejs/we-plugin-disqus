/**
 * Widget disqus main file
 *
 * See https://github.com/wejs/we-core/blob/master/lib/class/Widget.js for all Widget prototype functions
 */

module.exports = function disqusWidget(projectPath, Widget) {
  var widget = new Widget('disqus', __dirname);

  // Override default widget class functions after instance
  //
  widget.afterSave = function disqusWidgetAfterSave(req, res, next) {
    req.body.configuration = {
      disqus_shortname: req.body.disqus_shortname
    };
    return next();
  };

  // widget.formMiddleware = function formMiddleware(req, res, next) {
  //   next();
  // }

  return widget;
};