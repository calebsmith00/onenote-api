import { credential } from './callMsGraph.js'

export async function getAuthCode() {
    try {
        const { token } = await credential.getToken(".default")
        if (token) return token
    } catch  (error) {
        console.error(error)
    }
}