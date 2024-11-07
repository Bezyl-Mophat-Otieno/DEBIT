import {NextRequest, NextResponse} from "next/server";
import {ClerkUserSchema} from "@/lib/validations/clerk-user";
import { db } from '@/lib/db'


export async function POST( req : NextRequest ){
    
    const json = req.json()
    const body = ClerkUserSchema.parse(json)

          const result = await db.query(
            `INSERT INTO DebitUsers (user_id, email, created_at, updated_at)
             VALUES ($1, $2, $3, $4)
                 ON CONFLICT (user_id) DO UPDATE
                                              SET email = $2,
                                              updated_at = $4
                                              RETURNING *`,
            [
                body.id,
                body.email_address,
                new Date(body.created_at),
                new Date(body.updated_at)
            ]
        );
     
      if (!result[0]) {
         return  NextResponse.json({ success: false, message: "Failed to create a user account" });
      }
      return NextResponse.json({ success: true, message: "Successfully created" });
    
}