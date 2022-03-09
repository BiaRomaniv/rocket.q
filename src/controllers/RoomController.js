/* const Database = require("../db/config")

module.exports = {
     async create(req,res){

        const db = await Database() 
        const pass = req.body.password 
    
         let roomId
         let isRoom = true
         while(isRoom){
           
                for (var i = 0; i < 6; i++){
                    i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                    roomId += Math.floor(Math.random() * 10).toString()
                }

                roomIdTable = parseInt(roomId)
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

                if(!isRoom){               
                    await db.run(`INSERT INTO rooms (
                        id,
                        pass
                    ) VAlUES (
                        ${roomIdTable},
                        ${pass}
                    )`)
                }
        }         

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
} */


const { is } = require("express/lib/request")
const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true
         /* while(isRoom){  */
            /* Gera o numero da sala */
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()
            }

            /* Verificar se esse numero ja existi */
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId) 
            
            console.log(roomsExistIds)
            /* roomIdInt = parseInt(roomId)*/
            console.log(roomId) 
            console.log(isRoom)
            console.log(pass)

            if(!isRoom){
                /* Inseri a sala no banco */
            await db.run(`INSERT into rooms (id,pass) VAlUES (${roomId},"pass")`, function(err){
                 if(err){
                     return console.log(err.message);
                 }
                 console.log("ok")
             })

                
             }  
        /*  }         
 */
        await db.close()

        res.redirect(`/room/${roomId}`)
    },
}