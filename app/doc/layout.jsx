import React from 'react'

export default function DocLayout({children}) {
  return (
    <body>
        {children}
        <h1 className='bg-slate-300 p-8 text-center'>Js suis le layout</h1>
    </body>
  )
}
