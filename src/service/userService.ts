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

export const updateUserByEmail = async (email: string, updates: any) => {
  const { _id, ...filteredUpdates } = updates;

  const client = await clientPromise;
  const db = client.db(dbName);
  
  const result = await db.collection('users').updateOne(
    { email },
    { $set: filteredUpdates }
  );
  
  return result;
};

export const getUserByRefreshToken = async (refreshToken: string) => {
    if (!refreshToken) {
      throw new Error('Refresh token is required')
    }
  
    try {
      const client = await clientPromise
      const db = client.db('Edge')
      const usersCollection = db.collection('users')
  
      const user = await usersCollection.findOne({ refreshToken })
  
      return user
    } catch (error) {
      console.error('Error fetching user by refresh token:', error)
      throw new Error('Could not fetch user by refresh token')
    }
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

