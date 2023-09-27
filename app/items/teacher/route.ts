import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../lib/prisma'
import { revalidateTag } from "next/cache";
import { useSearchParams } from "next/navigation";


export async function POST( req: Request) {
try {
    const { nationalId, name, surname, dob, number, title, salary } = await req.json()

  const teacherData = await prisma.teacher.create({
    data: {
          nationalId, 
          name, 
          surname, 
          dob, 
          number, 
          title,
          salary
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

  const teacherData = await prisma.teacher.findMany({})

    return NextResponse.json({revalidateTag: true, data: teacherData}, {status: 200});  
};


// export async function PUT(req: Request) {
//     try {
//         const { id, nationalId, name, surname, dob, number, title, salary } = await req.json()
    
//       const teacherData = await prisma.teacher.update({
//         where: {
//           id,
//         },
//         data: {
//             nationalId, name, surname, dob,  number, title, salary,
//         }

//         })
    
//         return NextResponse.json({data: teacherData});
    
//     } catch (error) {
//         return NextResponse.error;
//     }
// };

// export async function DELETE(req: any, {params}: any) {


//   const  { id }  =  params
//   console.log(id)

//   const deletedTeacher = await prisma.teacher.delete({
//   where: {
//     id: id,
//   },
// })

// return NextResponse.json({revalidateTag: true, data: deletedTeacher}, {status: 200}); 
// }