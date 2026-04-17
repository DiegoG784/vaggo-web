import { DataResponse } from "./api";
import { Address } from "./location";

interface PropertyResponse extends DataResponse {
    id: number
    name: string
    type: string // e.g. "Residencial"
    description: string
    isActive: boolean
    totalCapacity: number
    addressId: number
    address: Address
}