import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../../lib/prisma'
import { revalidateTag } from "next/cache";
import { useSearchParams } from "next/navigation";



export async function PUT(req: Request) {
    try {
        const { id, nationalId, name, surname, dob, number, title, salary } = await req.json()
    
      const teacherData = await prisma.teacher.update({
        where: {
          id,
        },
        data: {
            nationalId, name, surname, dob,  number, title, salary,
        }

        })
    
        return NextResponse.json({data: teacherData});
    
    } catch (error) {
        return NextResponse.error;
    }
};

export async function DELETE(req: any, {params}: any) {

  const  { id }  =  params.id

  const deletedTeacher = await prisma.teacher.delete({
  where: {
    id: id,
  },
})

return NextResponse.json({revalidateTag: true, data: deletedTeacher}, {status: 200}); 
}