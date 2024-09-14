import { IAddress } from "./address.interface";

export interface IEmployee {
    name: string,
    company: string,
    salary: number,
    email: string,
    address: IAddress
}