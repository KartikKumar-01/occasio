import mongoose, { Mongoose } from "mongoose";

/**
 * Make sure we have a MongoDB URI.
 * This should be defined in `.env.local` as:
 * MONGODB_URI=mongodb+srv://...
 */
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

/**
 * We use a global cache because Next.js can reload files multiple times
 * during development, which may create multiple DB connections.
 *
 * The global object persists across hot reloads.
 */
interface MongooseCache {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Extend the global namespace safely
declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache | undefined;
}

// Initialize the cache if it doesn't exist
const cached: MongooseCache = global.mongoose ?? {
    conn: null,
    promise: null,
};

global.mongoose = cached;

/**
 * Connect to MongoDB using Mongoose.
 * Returns an existing connection if already connected.
 */
export async function connectToDatabase(): Promise<Mongoose> {
    // If we already have a connection, reuse it
    if (cached.conn) {
        return cached.conn;
    }

    // If no connection is in progress, start one
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI!, {
            bufferCommands: false, // Disable mongoose buffering for better error handling
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}
