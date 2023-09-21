'use client'

import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
   nationalId: string,
    title: string,
    name: string,
    surname: string,
    dob: string,
    number: string,
    salary: string
}
type studentInputs = {
  nationalId: string,
   name: string,
   surname: string,
   dob: string,
   number: string,
}

 function RegistrationForm() {
     const initialTeacherFormData = {nationalId: '',  title: '', name: '', surname: '', dob: '', number: '', salary: '' }
     const initialStudentFormData = {nationalId: '',  name: '', surname: '', dob: '', number: ''}
     const [switchBtn, setSwitchBtn] = useState(false)
     const [teacherFormData, setTeacherFormData] = useState(initialTeacherFormData)
     const [studentFormData, setStudentFormData] = useState(initialStudentFormData)

     const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>()

      async function create(data: Inputs) {
try {
  fetch(`http://localhost:3000/api/${switchBtn === true ? 'student': 'teacher'}/create`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(() => setStudentFormData(initialStudentFormData)).then(() => setTeacherFormData(initialTeacherFormData));
} catch (error) {
  console.log(error);
}
}

const onSubmit: SubmitHandler<Inputs> = (data) => {
try {
  create(data)
} catch (error) {
  console.log(error)
}
}
    
  return (
    <div className=''>
    <h1 className='text-center font-bold'>Registration Form</h1>
    <div className='teacterandstudentBtnContainer'>
    <button className='teacherBtn' onClick={() => setSwitchBtn(false)} style={{backgroundColor: switchBtn === false ?  '#B22222' : '#ffffff', color: switchBtn === false ? '#ffffff' : '#B22222', borderColor: '#B22222', borderWidth: '0.5px', padding: 10,}}>
     Teachers
    </button>
    <button className='studentBtn' onClick={() => setSwitchBtn(true)} style={{backgroundColor: switchBtn === true ? '#B22222' : '#ffffff', color: switchBtn === true ? '#ffffff' : '#B22222', borderColor: '#B22222', borderWidth: '0.5px', padding: 10}}>
     Students
     </button>
    </div>
    <div className='p-12'>
      <form onSubmit={handleSubmit(onSubmit)}>
      {switchBtn === false && 
      <div>
        <input className='input' {...register("nationalId", { required: true })} name='nationalId' placeholder='National ID' value={teacherFormData.nationalId} onChange={(e:any) => setTeacherFormData({...teacherFormData, nationalId: e.target.value})} />
        {errors.nationalId && <span className='text-red-500 text-xs'>National Id is required</span>}
        <select className='input' {...register("title", { required: true })} name='title' value={teacherFormData.title} onChange={(e:any) => setTeacherFormData({...teacherFormData, title: e.target.value})}>
        <option style={{color: '#c4c4c4'}}>Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Dr</option>
            <option>Prof</option>
        </select>
        {errors.title && <span className='text-red-500 text-xs'>Choose one option</span>}
        <input className='input'{...register("name", { required: true })} name='name' placeholder='Given Name' value={teacherFormData.name} onChange={(e:any) => setTeacherFormData({...teacherFormData, name: e.target.value})} />
        {errors.name && <span className='text-red-500 text-xs'>Given name field is required</span>}
        <input className='input' {...register("surname", { required: true })} name='surname' placeholder='Surname' value={teacherFormData.surname} onChange={(e:any) => setTeacherFormData({...teacherFormData, surname: e.target.value})} />
        {errors.surname && <span className='text-red-500 text-xs'>Surname is required</span>}
        <input className='input' {...register("dob", { required: true, min: 21 })} name='dob' type='date' placeholder='Date Of Birth' value={teacherFormData.dob} onChange={(e:any) => setTeacherFormData({...teacherFormData, dob: e.target.value})} />
        {errors.dob && <span className='text-red-500 text-xs'>Date of birth is required</span>}
        <input className='input' type='number' {...register("number", { required: true })} name='number' placeholder='Number' value={teacherFormData.number} onChange={(e:any) => setTeacherFormData({...teacherFormData, number: e.target.value})} />
        {errors.number && <span className='text-red-500 text-xs'>Mobile number is required</span>}
        <input className='input' {...register("salary")} name='salary' placeholder='Salary' value={teacherFormData.salary} onChange={(e:any) => setTeacherFormData({...teacherFormData, salary: e.target.value})} />
      </div>
        }
        {switchBtn === true && 
      <div>
        <input className='input' {...register("nationalId", { required: true })} name='nationalId' placeholder='National ID' value={studentFormData.nationalId} onChange={(e:any) => setStudentFormData({...studentFormData, nationalId: e.target.value})} />
        {errors.nationalId && <span className='text-red-500 text-xs'>National Id is required</span>}
        <input className='input'{...register("name", { required: true })} name='name' placeholder='Given Name' value={studentFormData.name} onChange={(e:any) => setStudentFormData({...studentFormData, name: e.target.value})} />
        {errors.name && <span className='text-red-500 text-xs'>Given name field is required</span>}
        <input className='input' {...register("surname", { required: true })} name='surname' placeholder='Surname' value={studentFormData.surname} onChange={(e:any) =>setStudentFormData({...studentFormData, surname: e.target.value})} />
        {errors.surname && <span className='text-red-500 text-xs'>Surname is required</span>}
        <input className='input' {...register("dob", { required: true, min: 21 })} name='dob' type='date' placeholder='Date Of Birth' value={studentFormData.dob} onChange={(e:any) => setStudentFormData({...studentFormData, dob: e.target.value})} />
        {errors.dob && <span className='text-red-500 text-xs'>Date of birth is required</span>}
        <input className='input' type='number' {...register("number", { required: true })} name='number' placeholder='Number' value={studentFormData.number} onChange={(e:any) => setStudentFormData({...studentFormData, number: e.target.value})} />
        {errors.number && <span className='text-red-500 text-xs'>Mobile number is required</span>}
      </div>
        }
        <button type='submit' className='submitBtn'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default RegistrationForm