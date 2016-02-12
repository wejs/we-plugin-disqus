/**
 * Widget disqus main file
 *
 * See https://github.com/wejs/we-core/blob/master/lib/class/Widget.js for all Widget prototype functions
 */

module.exports = function disqusWidget(projectPath, Widget) {
  var widget = new Widget('disqus', __dirname);

  widget.beforeSave = function disqusWidgetBeforeSave(req, res, next) {
    req.body.configuration = {
      disqus_shortname: req.body.disqus_shortname
    };
    return next();
  };

  return widget;
};