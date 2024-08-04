// Forma Antiga de chamar a biblioteca | const ex = require("express")

// Forma Nova de chamar a biblioteca

import express from 'express'
import { PrismaClient } from '@prisma/client' // Os bigodes server para irmportar coisas especificas da pastas

const app = express()
const prisma = new PrismaClient()




app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    
    res.status(200).json(users)

}) // O primerio parametro recebe as requisições ('request') e o segundo as respondem('response')!

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json({mensagem: "User criado com seucesso!"})

})// Podemos repetir a rota. Nesse exemplo estou usando duas vezes '/users'. Porem nao posso ter dois GET com a mesma rota, como com qualquer outro seja GET, PUT, POST, DELETE e PATCH.



app.listen(3000)
// http://localhost:3000