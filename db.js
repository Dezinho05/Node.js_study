import 'dotenv/config'; //process.env
import * as http from 'http'; // maybe will need to export *
import { neon } from '@neondatabase/serverless';
import postgres from 'postgres'

export const sql = postgres(neon(process.env.DATABASE_URL), { ssl: 'required' });
console.log(process.env.DATABASE_URL); 