import { io, Socket } from 'socket.io-client'
import type { ClientToServerEvents, ServerToClientEvents } from '@foaica/shared'

const SERVER_URL = (import.meta.env.VITE_SERVER_URL as string | undefined) ?? 'https://foasca.onrender.com'

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(SERVER_URL, {
  autoConnect: true,
  transports: ['websocket'],
})
