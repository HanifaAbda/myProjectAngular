import { Announcement } from "./announcement.interface"

export default interface User {
  readonly id: number
  email: string
  roles: string[]
  password: string
  name: string
  firstName: string
  billingAddress: string
  isVerified: boolean
  createdAt: string
  birthDate: string
  userIdentifier: string
  verified: boolean
//   receivedMessages: Message[]
//   sendMessages: Message[]
//   reservations: Reservation[]
  announcements: Announcement[]
}