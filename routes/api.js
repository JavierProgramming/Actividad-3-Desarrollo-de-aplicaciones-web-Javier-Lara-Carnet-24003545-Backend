const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

let tasks = [];
let goals = [];

// Middleware para proteger rutas
router.use(authMiddleware);

// Obtener tareas
router.get('/getTasks', (req, res) => {
  res.json(tasks);
});

// Obtener metas
router.get('/getGoals', (req, res) => {
  res.json(goals);
});

// Agregar tarea
router.post('/addTask', (req, res) => {
  const { title, dueDate } = req.body;
  if (!title || !dueDate) return res.status(400).json({ error: 'Faltan campos' });
  tasks.push({ id: Date.now(), title, dueDate });
  res.json({ message: 'Tarea agregada' });
});

// Agregar meta
router.post('/addGoal', (req, res) => {
  const { title, dueDate } = req.body;
  if (!title || !dueDate) return res.status(400).json({ error: 'Faltan campos' });
  goals.push({ id: Date.now(), title, dueDate });
  res.json({ message: 'Meta agregada' });
});

// Eliminar tarea
router.delete('/removeTask', (req, res) => {
  const { id } = req.body;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: 'Tarea eliminada' });
});

// Eliminar meta
router.delete('/removeGoal', (req, res) => {
  const { id } = req.body;
  goals = goals.filter(goal => goal.id !== id);
  res.json({ message: 'Meta eliminada' });
});

module.exports = router;
