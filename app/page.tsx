import RegistrationForm from '@/components/registration/registration'
import { prisma } from '@/lib/prisma';

async function Home() {


//   async function getTeachers() {
//     const res = await fetch('http://localhost:3000/api/teacher/find');
//     if(!res.ok) {
//       console.log(res);
//     }
//     return res.json()
//   }

// const data = getTeachers
const teacher = await prisma.teacher.findMany()
const student = await prisma.student.findMany()

console.log(teacher, student)
  
  return (
    <main className="h-full w-full mt-10">
    <div className='grid md:grid-cols-2 grid-cols-1'>
    <RegistrationForm />
    <div>
      <h1 className='text-center font-bold'>Data</h1>
      <div className='grid grid-cols-2 mt-28'>
        <div>
          <h1 className='text-center font-bold mb-5'>Teachers</h1>
          {teacher.map(te => 
          <div key={te.id} className='mt-5 mb-5 data-style'>
            <h2 className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-5'>NAME:</strong> {te.title}. {te.name.slice(0, 1).toUpperCase()}{te.name.slice(1)} {te.surname.slice(0, 1).toUpperCase()}{te.surname.slice(1)}</h2>
            <p className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-7'>DOB:</strong> {te.dob}</p>
            <p className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-8'>TEL:</strong> {te.number}</p>
            <p className=' text-xs text-gray-600'><strong className='text-gray-900 mr-2'>SALARY:</strong> {te.salary}</p>
          </div>
          )}
        </div>
        <div>
          <h1 className='text-center font-bold mb-5'>Students</h1>
          {student.map(te => 
          <div key={te.id} className='mt-5 mb-5 data-style'>
          <h2 className='mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-5'>NAME:</strong> {te.name.slice(0, 1).toUpperCase()}{te.name.slice(1)} {te.surname.slice(0, 1).toUpperCase()}{te.surname.slice(1)}</h2>
          <p className='mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-7'>DOB:</strong> {te.dob}</p>
          <p className=' mb-1 text-xs text-gray-600'><strong className='text-gray-900 mr-8'>TEL:</strong> {te.number}</p>
        </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </main>
  )
}
export default Home;
