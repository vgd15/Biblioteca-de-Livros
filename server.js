import app from "./src/app.js";


const port = process.env.PORT || 3000;



app.listen(port, ()=> {
    console.log(`Servidor escutando na porta http://localhost:${port}` )
})

/*Aqui, estamos fazendo o servidor começar a escutar as solicitações na porta especificada. Usamos o método listen no objeto server e passamos a variável port como argumento.

Além disso, definimos uma função de retorno de chamada que é executada quando o servidor começa a escutar as solicitações. Dentro dessa função, usamos console.log para exibir uma mensagem informando que o servidor está escutando na porta especificada. */

