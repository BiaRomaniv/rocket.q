const Database = require('../db/config')

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

           
            const roomExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomExistIds.some(roomExistId => roomExistId === roomId)

                if(!isRoom){               
                    await db.run(`INSERT INTO rooms (
                        id,
                        pass
                    ) VAlUES (
                        ${parseInt(roomId)},
                        ${pass}
                    )`)
                }
        }         

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}