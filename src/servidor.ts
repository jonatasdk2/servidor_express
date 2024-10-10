
import  express, { Request, Response }  from "express" 
const servidor = express()

const controlador = (req:Request,res:Response)=>{
    return res.send('meu primeiro servidor node.ts com express')
}

servidor.get('/', controlador)

servidor.listen(3000, () => {

console.log('Servidor rodando na porta 3000');

});