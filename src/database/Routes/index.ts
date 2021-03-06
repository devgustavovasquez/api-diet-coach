import * as express from 'express'
const routes = express.Router()

import UserController from '../controllers/UserController'
import SessionController from '../controllers/SessionController'
import MealsController from '../controllers/MealsController'


routes.get('/users', UserController.index)
routes.post('/users', UserController.create)    

routes.post('/session', SessionController.sign)

routes.get('/:user_id/meals/:x', MealsController.index)
routes.get('/meals/:meal_id', MealsController.searchById)
routes.post('/:user_id/meals', MealsController.store)
routes.delete('/meals/:meal_id', MealsController.delete)
routes.put('/meals/:meal_id', MealsController.update)



export default routes