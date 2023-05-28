// src/store.ts
import create from 'zustand';
import { Cart } from '../models/Carttype';
import { IProduct } from '../models/IProduct';

interface IStore {
    cart: Cart,
    addProduct(product: IProduct) : void,
    removeProduct(name: string) : void,
    resetState() : void,
}

const initialState = {
    cart: new Array<IProduct>()
}


export const useCartStore = create<IStore>((set, get) => ({
    cart: new Array<IProduct>(),
    addProduct(product: IProduct): void {
        const cart = get().cart;
        cart.push(product);
    },
    removeProduct(name: string) : void {
        const cart = get().cart;
        const cartWithoutItem = cart.filter((product) => product.name !== name)
        set({cart: cartWithoutItem});
    },
    resetState() : void {
        set({cart : initialState.cart});
    }
}));