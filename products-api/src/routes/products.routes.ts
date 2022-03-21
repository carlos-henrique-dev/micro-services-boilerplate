import express from 'express';

const router = express.Router();

const ProductRouter = () => {
  router.get('/', (req, res) => res.send('Produtos'));

  router.get('/teste', (req, res) => res.send('Produtos teste'));

  router.post('/', () => {});

  router.put('/:id', () => {});

  router.delete('/:id', () => {});

  return router;
};

export default ProductRouter;
