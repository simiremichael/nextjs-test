'use client'

import React, { useState } from 'react'
import TeacherForm from '../teacherForm/teacherForm'
import StudentForm from '../studentForm/studentForm'

function RegistrationForm() {
     const initialTeacherFormData = {nationalId: '', title: '', name: '', surname: '', dob: '', number: '', salary: '' }
     const initialStudentFormData = {nationalId: '', name: '', surname: '', dob: '', number: ''}
     const [switchBtn, setSwitchBtn] = useState(false)
     const [teacherFormData, setTeacherFormData] = useState(initialTeacherFormData)
     const [studentFormData, setStudentFormData] = useState(initialStudentFormData)

const handleSubmit = () => {

}

  return (
    <div className=''>
    <h1 className='text-center font-bold'>Registration Form</h1>
    <div className='teacterandstudentBtnContainer'>
    <button className='teacherBtn' onClick={() => setSwitchBtn(false)} style={{backgroundColor: switchBtn === false && '#B22222', color: switchBtn === false ? '#ffffff' : '#B22222', borderColor: '#B22222', borderWidth: '0.5px', padding: 10,}}>
     Teachers
    </button>
    <button className='studentBtn' onClick={() => setSwitchBtn(true)} style={{backgroundColor: switchBtn === true && '#B22222', color: switchBtn === true ? '#ffffff' : '#B22222', borderColor: '#B22222', borderWidth: '0.5px', padding: 10}}>
     Students
     </button>
    </div>
    <div className='p-12'>
      <form onSubmit={handleSubmit}>
      {switchBtn === false && 
      <div>
        <TeacherForm teacherFormData={teacherFormData} setTeacherFormData={setTeacherFormData} />
      </div>
        }
        {switchBtn === true && 
      <div>
        <StudentForm studentFormData={studentFormData} setStudentFormData={setStudentFormData} />
      </div>
        }
        <button type='submit' className='submitBtn'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default RegistrationForm