import { Categoria } from './Categoria';

export interface ProductoRegistro {
    id_prod: number, 
    nombre: string, 
    descrip: string, 
    categoria: Categoria,
    stock: number, 
    precio: number, 
    img: string 
}