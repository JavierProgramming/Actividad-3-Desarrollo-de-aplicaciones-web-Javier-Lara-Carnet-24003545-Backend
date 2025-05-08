const API_KEY = '123456-my-api-key'; // Puedes cambiar esta clave

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (authHeader === API_KEY) {
    next();
  } else {
    res.status(403).json({ error: 'Unauthorized: API Key inválida' });
  }
}

module.exports = authMiddleware;
