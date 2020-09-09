import { Categoria } from './Categoria';

export interface Producto{
    id_prod: number
    nombre: string,
    descrip: string,
    precio: number,
    stock: number,
    id_cat: number,
    nomb_cat: string,
    descrip_cat: string,
    img: string
}