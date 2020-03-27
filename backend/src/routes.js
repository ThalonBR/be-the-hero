const express = require('express')
const routes = express.Router();
const OngController = require('./controllers/OngController'); 
const IncidentController = require('./controllers/IncidentController');
const ProfilleController = require('./controllers/ProfilleController');
const SessionController = require('./controllers/SessionController');

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfilleController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;