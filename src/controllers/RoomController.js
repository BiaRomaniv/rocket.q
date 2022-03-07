const Database = require('../db/config')

module.exports = {
    async create(req,res){

        const db = await Database() //usando o await, necessita do async na funcao original
        const pass = req.body.password
    
        let roomId
        let isRoom = true
        while(isRoom){
        /* gera o numero da sala */
            for(var i = 0; i<6; i++){
                i == 0 ? roomId =  Math.floor(Math.random()*10).toString() : roomId +=  Math.floor(Math.random()*10).toString()//to string para que o += seja uma concatenação
                
            }
            /* verificar se o numero já existe */
        const roomsExistIds = await db.all(`SELECT id FROM rooms`)

            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

        if(!isRoom){
                /* Inseri a sala no banco */
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VAlUES (
                    ${parseInt(roomId)},
                    "${pass}"
                )`)
            }
        }        
        await db.close()

        res.redirect(`/room/${roomId}`)
}
}
