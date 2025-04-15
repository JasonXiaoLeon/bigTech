import clientPromise from '@/lib/databse'

const dbName = 'Edge'

export const getUserByEmail = async (email: string) => {
    try {
        const client = await clientPromise
        const db = client.db(dbName)
        const usersCollection = db.collection('users')

        const user = await usersCollection.findOne({ email })
        return user
    } catch (error) {
        console.error('Error fetching user:', error)
        throw new Error('Could not fetch user')
    }
}

export async function getTokenByUser(email: string | undefined) {
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

export async function getRefreshExpireTimeByUser(email: string | undefined) {
    if (!email) {
        throw new Error('Email is required')
    }

    const user = await getUserByEmail(email)

    if (!user) {
        console.log('No user found with the provided email')
        return null
    }

    return user.refreshTokenExpires
}

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
