import RegistrationForm from '@/components/registration/registration'
  
export default function Home() {
  return (
    <main className="h-full w-full mt-5">
    <div className='grid grid-cols-2'>
    <RegistrationForm />
    <div>
      <h1 className='text-center font-bold'>Datas</h1>
    </div>
    </div>
    </main>
  )
}
