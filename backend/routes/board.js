const router =require("express").Router();
const {createBoard,getAllBoards,getBoard,updateBoard,deleteBoard} = require('../controllers/boardController')

router.route('/board').post(createBoard).get(getAllBoards);
router.route('/board/:b_Id').get(getBoard);
router.route('/board/:b_Id').put(updateBoard);
router.route('/board/:b_Id').delete(deleteBoard);

module.exports = router;