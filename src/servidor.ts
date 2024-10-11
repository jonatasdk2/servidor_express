
import  express, { Request, Response }  from "express" 
const servidor = express()

const controlador = (req:Request,res:Response)=>{
    return res.send('meu primeiro servidor node.js com express e typescript')
}

servidor.get('/', controlador)

servidor.listen(3000, () => {

console.log('Servidor rodando na porta 3000');

});