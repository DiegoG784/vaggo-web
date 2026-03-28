import User from "./user";

export default interface Vehicle {

   id: number
   brand: string
   model: string
   color: string
   licensePlate: string
   manufactureYear: Date
   isActive: boolean
   userId: User

}