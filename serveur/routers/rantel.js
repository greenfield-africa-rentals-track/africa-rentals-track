const express = require('express');
const app = express();
const router=express.Router();
const rantelequipment=require('../controllers/rantel');
router.get('/rantel',rantelequipment.get);
router.post('/rantel',rantelequipment.add);
module.exports = router;