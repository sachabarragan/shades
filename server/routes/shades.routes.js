const express = require ('express');
const router = express.Router();

const shadeCtrl = require('../controllers/shade.controller');

router.get('/', shadeCtrl.getShades);
router.post('/', shadeCtrl.createShade);
router.get('/:id', shadeCtrl.getOneShade);
router.put('/:id', shadeCtrl.editShade);
router.delete('/:id', shadeCtrl.deleteShade);

module.exports = router;