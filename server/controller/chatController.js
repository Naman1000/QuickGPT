
// API Controller for creating a new chat

import Chat from "../Models/Chat.js"

export const createChat = async(req,res)=> {
    try{
        const userId = req.user._id
       
        const chatData = {
            userId ,
            messages: [],
            name: "New Chat",
            userName : req.user.name 
        }
        await Chat.create(chatData)
        res.json({success : true, message : "Chat created"})

    }catch(error){
        res.json({success: false, message: error.message})
    }
}


// API Controller for creating getting chats

export const getChats = async(req,res)=> {
    try{
        const userId = req.user._id;
         const chats = await Chat.find({userId}).sort({updated : -1})

         res.json({success : true, chats})


    }catch(res){
        res.json({success : false, message : error.message })
    }
}

// API controller for deleting chat

export const deleteChat = async(req,res)=> {
    try{
        const userId = req.user._id
        const {chatId} = req.body

        await Chat.deleteOne({_id: chatId, userId})

        res.json({success : true, message: "Chat deleted"})
    }catch(error){
        res.json({success : false, message : error.message})
    }
}

