// Access Control Middleware
const whitelist = ['example1@example.com', 'example2@example.com'];
const blacklist = ['blocked1@example.com', 'blocked2@example.com'];

const checkAccessControl = (req, res, next) => {
  const { email } = req.body;

  if (blacklist.includes(email)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (whitelist.length > 0 && !whitelist.includes(email)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  next();
};

app.use(checkAccessControl);
