import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {nationalId, name, surname, dob, number} = req.body;
console.log(req.body);
    try {
         await prisma.student.create({
            data: {
                nationalId, 
                name, 
                surname, 
                dob, 
                number, 
            },
          })
        
         return res.status(200).send({message: 'Profile created successfully'})
    } catch (error) {
        return res.status(500).json(error)
    }
}