const { Router } = require('express');
const router = Router();

const {
    rendertacheForm,
    createNewtache,
    rendertaches,
    renderEditForm,
    updatetache,
    deletetache
} = require('../controllers/tache.controller');

const { isAuthenticated } = require('../helpers/auth');

// New tache
router.get('/taches/add', isAuthenticated, rendertacheForm);
router.post('/taches/new-tache', isAuthenticated, createNewtache);

// Get all taches

router.get('/taches', isAuthenticated, rendertaches);

// Edit taches
router.get('/taches/edit/:id', isAuthenticated, renderEditForm);
router.put('/taches/edit/:id', isAuthenticated, updatetache);

// Delete tache
router.delete('/taches/delete/:id', isAuthenticated, deletetache);

module.exports = router;