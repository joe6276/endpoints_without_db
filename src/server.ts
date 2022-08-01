import express, { json, NextFunction, Request, Response } from 'express'
import router from './Routes/ProductRoutes'
const app= express()
// MiddleWare - They change the request or response
app.use(json())
app.use('/products', router)
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({Error:err.message})
})

app.listen(5000, ()=>{
    console.log('App is Running');
    
})



