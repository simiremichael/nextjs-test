import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {nationalId, title, name, surname, dob, number, salary} = req.body;

    try {
         await prisma.teacher.create({
            data: {
                nationalId, 
                title, 
                name, 
                surname, 
                dob, 
                number, 
                salary
            },
          })
        
         return res.status(200).send({message: 'Profile created successfully'})
    } catch (error) {
        return res.status(500).json(error)
    }
}