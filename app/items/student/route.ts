import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../lib/prisma'
import { revalidateTag } from "next/cache";


export async function POST( req: Request) {
try {
    const { nationalId, name, surname, dob, number, title, salary } = await req.json()

  const teacherData = await prisma.student.create({
    data: {
          nationalId, 
          name, 
          surname, 
          dob, 
          number, 
  },
    })

    const data = JSON.stringify(teacherData);
    revalidateTag('teach')
    return NextResponse.json({revalidateTag: true, data});

} catch (error) {
    return NextResponse.error;
}
    
};

export async function GET() {

  const teacherData = await prisma.student.findMany({})

    return NextResponse.json({revalidateTag: true, data: teacherData}, {status: 200});  
};


export async function PUT(req: Request) {
    try {
        const { id, nationalId, name, surname, dob, number } = await req.json()
    
      const teacherData = await prisma.student.update({
        where: {
          id,
        },
        data: {
            nationalId, name, surname, dob,  number
        }

        })
    
        return NextResponse.json({data: teacherData});
    
    } catch (error) {
        return NextResponse.error;
    }
};

// export async function DELETE(req: Request) {

//   const { id } = req.params

// const deleteUser = await prisma.teacher.delete({
//   where: {
//     id: id,
//   },
// })
// }