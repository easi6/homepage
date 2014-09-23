
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'easi6' });
};

exports.eula = function(req, res) {
  res.render('eula', { title: 'EULA' });
}
