// import { response } from "express";
import { productModel } from "../models/Products.model.js";
// import { productRouter } from "../routes/products.routes.js";

//peticion del post para crear productos
export const postproduct = async (request, response) => {
    // return Response.json({'mensaje': 'ACA FUNCIONA WE'})

    try{
        //para crear se necesita enviar la info
        //la info se envia al cuerpo de la peticion
        //asi creamos una coleccion de bases de datos we
       const newproduct = await productModel.create(request, body);
       return response.status(201).json({
        mensaje:"mira, si pude :D",
        datos: newproduct
       });

    } catch (error) {
        return response.status(400).json ({
        mensaje: "te tiraste mi servidor",
        problem: error || error.message
        
    });
    }  
}

//peticion del get para mostrarlos
export const getProduct = async (request, response) => {

    //logica de la peticion we
    // return Response.json ({'Mensaje': 'MIRA WE, SIN MANOS'})

    try {
        let products = await productModel.find()

        //le vamos a poner k pasa si no hay nada we :)

        if(products.length === 0){

            return response.status(200).json({
                mensaje: "no hay nada, yo de ti o creo algo o me devuelvo"
            })

        }
        return response.status(200).json({ 
            mensaje: 'esto es todo lo que encontre para ti',
            datos: products

        })
        
    } catch (error) {
        return response.status(400).json({
            mensaje: "no c pudo encontrar nada",
            problem: error || error.message
    })
}
}
//peticion del put para actualizarlos we
export const putProductById = async (request, response) => {

    //logica de la peticion put we
    return response.json ({'Mensaje': 'ESTO ES COMPLICADO WE'})
}
//peticion del delete para eliminarlos we

export const DeleteProductById = async (request, response) => {

    //logica de la peticion put we
    return response.json ({'Mensaje': 'NAH MENTIRA :)'})
} 