const Board = require("../models/Leaderboard");

//Add board
const createBoard = async (req,res) => {
    const newBoard = new Board(req.body);
    try{
        const boardCount = await Board.countDocuments({});
        newBoard.b_Id = 'B00' + (parseInt(boardCount)+1)
        try{
            const board = await newBoard.save();
            res.status(200).json(board);
        } catch (err){
            res.status(500).json(err);
        }
    }catch(err){
        console.log(err);
    }
};

//Get all the boards
const getAllBoards = async (req,res) => {
    const b_Id = req.params.b_Id;
    try{
        let board;
        if(b_Id) {
            board = await Board.find({ b_Id });
        } else {
            board = await Board.find();
        }
        board.sort((a, b) => a.rank - b.rank);
        //console.log(board);
        res.status(200).json(board);
    }catch(err){
        res.status(500).json(err);
    }
};

//Get one board
const getBoard = async (req,res) => {
    try{
        const board = await Board.findOne({ 'b_Id':req.params.b_Id });
        res.status(200).json(board);
    }catch(err){
        res.status(500).json(err);
    }
};

//Update board
const updateBoard = async (req,res) => {
    try{
        const updateBoard = await Board.findOneAndUpdate({'b_Id':req.params.b_Id},
            {
                $set:req.body
            },{new:true}
        );
        res.status(200).json(updateBoard);
    }catch(err){
        res.status(500).json(err);
    }
};

//Delete board
const deleteBoard = async (req,res) => {
    try{
        const deleteBoard = await Board.findOneAndDelete({'b_Id':req.params.b_Id});
        res.status(200).json("Board has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
};

module.exports = {
    createBoard,
    getAllBoards,
    getBoard,
    updateBoard,
    deleteBoard
};