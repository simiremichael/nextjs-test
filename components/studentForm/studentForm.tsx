import React from 'react'

function StudentForm({setStudentFormData, studentFormData}: any) {
  return (
    <div>
         <input className='input' placeholder='National ID' required value={studentFormData.nationalId} onChange={(e:any) => setStudentFormData({...studentFormData, nationalId: e.target.value})} />
        <input className='input' placeholder='Name' required value={studentFormData.name} onChange={(e:any) => setStudentFormData({...studentFormData, name: e.target.value})} />
        <input className='input' placeholder='Surname' required value={studentFormData.surname} onChange={(e:any) => setStudentFormData({...studentFormData, surname: e.target.value})} />
        <input className='input' type='date' placeholder='Date Of Birth' value={studentFormData.dob} onChange={(e:any) => setStudentFormData({...studentFormData, dob: e.target.value})} />
        <input className='input' type='number' required placeholder='Number' value={studentFormData.number} onChange={(e:any) => setStudentFormData({...studentFormData, number: e.target.value})} />
    </div>
  )
}

export default StudentForm