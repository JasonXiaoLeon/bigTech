import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error('Please add your Mongo URI to .env.local')

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(URI, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(URI, options)
    clientPromise = client.connect()
}

export default clientPromise