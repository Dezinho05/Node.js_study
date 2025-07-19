import 'dotenv/config'; //process.env
import { neon } from '@neondatabase/serverless';
//import postgres from 'postgres'

export const sql = neon(process.env.DATABASE_URL);