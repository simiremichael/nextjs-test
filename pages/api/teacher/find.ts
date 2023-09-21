import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma'

type Data = {
    id: number;
    nationalId: string,
    title: string,
    name: string,
    surname: string,
    dob: string,
    number: string,
    salary: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
   
    try {
    const data = await  prisma.teacher.findMany()
    return res.status(200).json(data)
   } catch (error) {
    res.status(500).json(error)
   }
}
