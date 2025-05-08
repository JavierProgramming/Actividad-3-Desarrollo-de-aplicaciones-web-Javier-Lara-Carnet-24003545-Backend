# Backend - To Do List (Tareas y Metas)

Este proyecto es un backend en Node.js + Express para gestionar tareas y metas personales.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/todo-backend.git
   cd todo-backend

Instala las dependencias:
npm install

Ejecuta el servidor:
npm start

API Key
Para consumir cualquier endpoint, se debe enviar en el Header:
Authorization: 123456-my-api-key

Endpoints
| Método | Ruta        | Descripción               |
| ------ | ----------- | ------------------------- |
| GET    | /getTasks   | Obtener lista de tareas   |
| GET    | /getGoals   | Obtener lista de metas    |
| POST   | /addTask    | Agregar una tarea         |
| POST   | /addGoal    | Agregar una meta          |
| DELETE | /removeTask | Eliminar una tarea por id |
| DELETE | /removeGoal | Eliminar una meta por id  |

Formato JSON esperado:
{
  "title": "Estudiar Node.js",
  "dueDate": "2025-05-10"
}

Para eliminar:
{
  "id": 1715020000000
}




