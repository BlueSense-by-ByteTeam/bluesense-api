

const renderAuth = async (req, res, next) => {
  res.render('supplier/auth');
};
const renderRegister = async (req, res, next) => {
  res.render('supplier/register');
};
const renderDashboard = async (req, res, next) => {
  res.render('supplier/dashboard');
};

export default {
  renderAuth,
  renderRegister,
  renderDashboard,
};
