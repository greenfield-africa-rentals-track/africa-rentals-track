const express = require('express');
const app = express();
const router=express.Router();
const adminControllers=require('../controllers/admin');
router.get('/adminlogins',adminControllers.get);
router.post('/adminlogins',adminControllers.add);
router.delete('/adminlogins/:id',adminControllers.delete)
router.put('/adminlogins/:id',adminControllers.update);
module.exports = router;