
'use client'

import { NextResponse } from 'next/server';
import React from 'react'

function DeleteBtn({id}: any) {

     console.log(id)
    
    async function deleteStudent(teachId: any) {
        const res = await fetch(`http://localhost:3000/items/teacher/${teachId}`, {
            method: 'DELETE',
        })
          const data = await res.json()
          return NextResponse.json(data);
      }
  return (
    <button className='delete-btn' onClick={() => deleteStudent(id)}>Delete</button>
  )
}

export default DeleteBtn