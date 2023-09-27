import DeleteBtn from '@/components/btn/deleteBtn';
import RegistrationForm from '@/components/registration/registration'
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

async function Home() {



// const student = await prisma.student.findMany()


// const teacher = await prisma.teacher.findMany();

async function getTeachers() {
const res = await fetch('http://localhost:3000/items/teacher',{
  next: { tags: ['teach']}
});
const data = await res.json()
return  data.data;
}

 const data = await getTeachers()

 async function getStudents() {
  const res = await fetch('http://localhost:3000/items/student',{
    next: { tags: ['teach']}
  });
  const data = await res.json()
  return  data.data;
  }
  
   const studentData = await getStudents()

   
   async function deleteTeacher(teachId: any) {
    await prisma.teacher.delete({
     where: {
       id: teachId,
     },
   })
 }

  return (
    <main className="h-full w-full mt-10">
    <div className='grid md:grid-cols-2 grid-cols-1'>
    <RegistrationForm />
    <div>
      <h1 className='text-center font-bold'>Data</h1>
      <div className='grid grid-cols-2 mt-28'>
        <div>
          <h1 className='text-center font-bold mb-5'>Teachers</h1>
          {data?.map((te: any) => 
          <>
          <Link href={`http://localhost:3000/items/teacherDetails/${te.id}`} key={te.id}>
          <div className='mt-5 mb-1 data-style'>
            <h2 className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-5'>NAME:</strong> {te.title}. {te.name.slice(0, 1).toUpperCase()}{te.name.slice(1)} {te.surname.slice(0, 1).toUpperCase()}{te.surname.slice(1)}</h2>
            <p className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-7'>DOB:</strong> {te.dob}</p>
            <p className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-8'>TEL:</strong> {te.number}</p>
            <p className=' text-xs text-gray-600'><strong className='text-gray-900 mr-2'>SALARY:</strong> {te.salary}</p>
          </div>
          </Link>
          <DeleteBtn  id={te.id} />
          {/* <button onClick={() => deleteTeacher(te.id)}>Delete</button> */}
          </>
          )}
        </div>
        <div>
          <h1 className='text-center font-bold mb-5'>Students</h1>
          {studentData.map((te: any) =>
           <>
          <Link href={`http://localhost:3000/items/studentDetails/${te.id}`} key={te.id}>
          <div key={te.id} className='mt-5 mb-5 data-style'>
          <h2 className='mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-5'>NAME:</strong> {te.name.slice(0, 1).toUpperCase()}{te.name.slice(1)} {te.surname.slice(0, 1).toUpperCase()}{te.surname.slice(1)}</h2>
          <p className='mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-7'>DOB:</strong> {te.dob}</p>
          <p className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-8'>TEL:</strong> {te.number}</p>
        </div>
        </Link>
         <DeleteBtn id={te.id} />
         </>
          )}
        </div>
      </div>
    </div>
    </div>
    </main>
  )
}
export default Home;
