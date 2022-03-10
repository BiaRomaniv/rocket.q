const Database = require('../db/config')

module.exports = {

    async index(req, res){
        const db = await Database()
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        /* verificar se a senha está correta */
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id= ${roomId}`)/* db.all traz todos os dados, db.get traz apenas um dado.
         devemos garantir que esse dado será unico com o ID está garantido */
        if( verifyRoom.pass == password) {
            if( action == "delete"){
                await db.run(`DELETE FROM questions WHERE id= ${questionId}`)

            }else if (action == "check"){
                await db.run( `UPDATE questions SET read = 1 WHERE id= ${questionId} `)
            }
            res.redirect(`/room/${roomId}`)
        }else {
            res.render('passincorrect', {roomId: roomId})
        }
    },

    async create(req,res) {
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        /* QUESTION COMO É T3EXTO PRECISA ESTAR ENTRE ASPAS DUPLAS NO VALUES */
        await db.run(`
        INSERT into questions(
            title,
            room,
            read
        ) VALUES (
            "${question}", 
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)
    }
}