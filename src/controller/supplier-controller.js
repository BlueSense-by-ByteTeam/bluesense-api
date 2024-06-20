

const renderAuth = async (req, res, next) => {
  res.render('supplier/auth/index.ejs');
};
const renderRegister = async (req, res, next) => {
  res.render('supplier/register/index.ejs');
};
const renderDashboard = async (req, res, next) => {
  res.render('supplier/dashboard/index.ejs');
};

export default {
  renderAuth,
  renderRegister,
  renderDashboard,
};
