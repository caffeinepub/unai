import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactMessage {
    id: bigint;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getContacts(): Promise<Array<ContactMessage>>;
    getContactsSorted(orderBy: string): Promise<Array<ContactMessage>>;
    submitContact(name: string, company: string, email: string, phone: string, message: string): Promise<bigint>;
}
