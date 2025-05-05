import { connectDB } from '@/lib/connectdb'
import clientPromise from '@/lib/databse'
import { decrypt } from '@/lib/encryption';
import UserFinance from '@/models/Finance';
import TransactionHistory from '@/models/TransactionHistory';
import { User } from '@/models/User';

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


export async function getUsersWithPermissionLevel() {
  await connectDB();
  const users = await User.find({
    permissionLevel: { $gte: 3, $lte: 6 },
    isDelete: 0
  }).lean();
  return users;
}

export async function updateMultipleUsers(users: any[]) {
  try {
    await connectDB();

    const updatePromises = users.map(async (user) => {
      const { _id, gender, age, permissionLevel } = user;

      const existingUser = await User.findById(_id);

      if (!existingUser) return null;

      const hasChanged =
        existingUser.gender !== gender ||
        existingUser.age !== age ||
        existingUser.permissionLevel !== permissionLevel;

      if (!hasChanged) return null;

      return User.findByIdAndUpdate(
        _id,
        {
          gender,
          age,
          permissionLevel,
          updatedAt: Date.now(),
        },
        { new: true }
      );
    });

    const updatedUsers = await Promise.all(updatePromises);

    const filteredUsers = updatedUsers.filter((user) => user !== null);

    return {
      acknowledged: filteredUsers.length > 0,
      updatedUsers: filteredUsers,
    };
  } catch (error) {
    console.error("Error updating users:", error);
    throw new Error("Failed to update users");
  }
}


export const getUserFinanceByEmail = async (email: string) => {
  const finance = await UserFinance.findOne({ email })
  if (!finance) return null
  
  const decryptedFinance = {
    email: finance.email,
    balance: parseFloat(decrypt(finance.balance)),
    stocks: parseFloat(decrypt(finance.stocks)),
    funds: parseFloat(decrypt(finance.funds)),
    cryptocurrency: parseFloat(decrypt(finance.cryptcurrency)),
  }

  return decryptedFinance
}



export const getUserTransactions = async (email: string) => {
  return await TransactionHistory.find({ email }).sort({ date: -1 }).limit(10)
}