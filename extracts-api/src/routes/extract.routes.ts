import express from 'express';
// import { RoleService, UserService } from '../services';
// import { UserController } from '../controllers';
// import { userBodyRequirements, queryRequirements, passwordValidator } from '../validators';

const router = express.Router();

router.get('/', (req, res) => res.send('Extratos'));

router.get('/find', () => {});

router.post('/', () => {});

router.put('/:id', () => {});

router.delete('/:id', () => {});

export default router;
