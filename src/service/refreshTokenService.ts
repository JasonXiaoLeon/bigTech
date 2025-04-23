import clientPromise from '@/lib/databse'
import { getRefreshExpireTimeByUser, getUserByEmail, getUserByRefreshToken } from '@/service/userService'
import { isDbTokenExpired } from '@/token/token'
import jwt from 'jsonwebtoken'

const dbName = 'Edge'
const ACCESS_TOKEN_EXPIRE_IN = parseInt(process.env.AUTH_SECRET || '300', 10)

export const updateUserRefreshToken = async (
    email: string,
    newRefreshToken: string,
    expiresAt: number
) => {
    try {
        const client = await clientPromise
        const db = client.db(dbName)
        const usersCollection = db.collection('users')

        const result = await usersCollection.updateOne(
            { email },
            { $set: { refreshToken: newRefreshToken, refreshTokenExpires: expiresAt } }
        )
        return result
    } catch (error) {
        console.error('Error updating refresh token:', error)
        throw new Error('Could not update refresh token')
    }
}

export async function refreshAccessToken(refreshToken: string) {
  const user = await getUserByRefreshToken(refreshToken)
  if (!user) {
    throw new Error('Invalid refresh token.')
  }

  const refreshExpireTime = await getRefreshExpireTimeByUser(user.email)

  if (isDbTokenExpired(refreshExpireTime)) {
    await clearUserRefreshToken(user.email)
    throw new Error('Refresh token expired.')
  }

  const newAccessToken = jwt.sign(
    { email: user.email, gender: user.gender },
    process.env.JWT_SECRET as string,
    { expiresIn: ACCESS_TOKEN_EXPIRE_IN }
  )

  return newAccessToken
}

export async function getRefreshTokenByUser(email: string | undefined) {
  if (!email) {
      throw new Error('Email is required')
  }

  const user = await getUserByEmail(email)

  if (!user) {
      console.log('No user found with the provided email')
      return null
  }

  return user.refreshToken
}

export async function clearUserRefreshToken(email: string) {
  try {
      const client = await clientPromise
      const db = client.db(dbName)
      const usersCollection = db.collection('users')

      await usersCollection.updateOne(
          { email },
          { $unset: { refreshToken: "", refreshTokenExpires: "" } }
      )
  } catch (error) {
      console.error('Error clearing refresh token:', error)
      throw new Error('Could not clear refresh token')
  }
}