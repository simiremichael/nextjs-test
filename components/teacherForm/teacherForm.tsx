import React from 'react'

function TeacherForm({setTeacherFormData, teacherFormData }: any) {

    console.log(teacherFormData)
  return (
    <div>
        <input className='input' placeholder='National ID' value={teacherFormData.nationalId} onChange={(e:any) => setTeacherFormData({teacherFormData, nationalId: e.target.value})} />
        <select className='input' value={teacherFormData.title} onChange={(e:any) => setTeacherFormData({teacherFormData, title: e.target.value})}>
        <option style={{color: '#c4c4c4'}}>Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Dr</option>
            <option>Prof</option>
        </select>
        <input className='input' placeholder='Name' value={teacherFormData.name} onChange={(e:any) => setTeacherFormData({teacherFormData, name: e.target.value})} />
        <input className='input' placeholder='Surname' value={teacherFormData.surname} onChange={(e:any) => setTeacherFormData({teacherFormData, surname: e.target.value})} />
        <input className='input' type='date' placeholder='Date Of Birth' value={teacherFormData.dob} onChange={(e:any) => setTeacherFormData({teacherFormData, dob: e.target.value})} />
        <input className='input' type='number' placeholder='Number' value={teacherFormData.number} onChange={(e:any) => setTeacherFormData({teacherFormData, number: e.target.value})} />
        <input className='input' type='number' placeholder='Salary' value={teacherFormData.salary} onChange={(e:any) => setTeacherFormData({teacherFormData, salary: e.target.value})} />
    </div>
  )
}

export default TeacherForm