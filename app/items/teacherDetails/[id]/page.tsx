import React from 'react'
import { prisma } from '../../../../lib/prisma'

async function detailsPage(params: any) {

 

    const id = params.params.id


    async function getTeachers() {
        const res = await prisma.teacher.findUnique({
            where: {
              id: Number(id)
            },
          })
    
        return  res

        }

         const data = await getTeachers()

   

  return (
        <div className='mt-5 mb-5 data-style'>
            <h1 className='font-bold text-lg mb-8'>Teacher Deatils Page</h1>
            <h2 className='font-bold text-md mb-4'>Teacher ID: {data?.id}</h2>
            <p className=' mb-1 text-xs text-gray-600 font-bold'><strong className='text-gray-900 mr-4'>NATIONAL ID:</strong> {data?.nationalId.toUpperCase()}</p>
          <h2 className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-14'>NAME:</strong> {data?.title}. {data?.name.slice(0, 1).toUpperCase()}{data?.name.slice(1)} {data?.surname.slice(0, 1).toUpperCase()}{data?.surname.slice(1)}</h2>
          <p className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-16'>DOB:</strong> {data?.dob}</p>
          <p className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-16 pr-2'>TEL:</strong> {data?.number}</p>
          <p className=' text-xs text-gray-600'><strong className='text-gray-900 mr-11'>SALARY:</strong> {data?.salary}</p>
       
        </div> 
  )
}

export default detailsPage