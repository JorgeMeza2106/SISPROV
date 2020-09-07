import { Categoria } from './Categoria';

export interface Producto{
    codigo: string,
    nombre: string,
    descripcion: string,
    precio: string,
    stock: number,
    id_cat: number,
    nomb_cat: string,
    descrip_cat: string,
    img: string
}