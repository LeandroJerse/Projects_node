import express from 'express';
import { PrismaClient } from '../generated/prisma/index.js'
import bcrypt from 'bcrypt'

// Configuração da DATABASE_URL diretamente
process.env.DATABASE_URL = 'mongodb+srv://leandro:MeOX7JYStpQb33B9@users.shahosu.mongodb.net/?retryWrites=true&w=majority&appName=Users';

console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Definida' : 'Não definida');
const prisma = new PrismaClient();
const router = express.Router();

//cadastro

router.post('/register', async (req, res) => {
    try {

        
        const user = req.body; 
        
        // Validação básica dos dados
        if (!user || !user.email || !user.name || !user.password) {
            return res.status(400).json({ 
                error: 'Email, nome e senha são obrigatórios',
                received: req.body 
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);

        const userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashPassword,
            }
        })
    
        res.status(201).json({ 
            message: 'Cadastro realizado com sucesso',
            user: {
                id: userDB.id,
                email: userDB.email,
                name: userDB.name,
                createdAt: userDB.createdAt
            }
        });
    } catch (error) {
        console.error('Erro no cadastro:', error);
        
        // Tratamento específico para diferentes tipos de erro
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Email já cadastrado' });
        }
        
        res.status(500).json({ 
            error: 'Erro ao cadastrar usuário',
            details: error.message 
        });
    }

})

export default router;