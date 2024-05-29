import React from 'react'

function App() {
  return (
    <div className='text-white bg-zinc-900 w-full h-screen flex-col'>
      <h1 className='mb-2 flex justify-center pt-5 text-3xl'>Todo List</h1>
        <h3 className='text-2xl flex justify-around mb-4'>Sign Up Page</h3>
        <form action="/signup" method='post'>
          <input className='mt-5 block ml-[199px] pl-4 bg-zinc-800 py-2' type="text" name='fullname' placeholder='Enter your fullname' />
          <input className='mt-5 block ml-[199px] pl-4 bg-zinc-800 py-2' type="text" name="username" placeholder="Enter username"/>
          <input className='mt-5 block ml-[199px] pl-4 bg-zinc-800 py-2' type="password" name="password" placeholder="Enter password"/>
          <input className='bg-blue-500 rounded-md py-2 px-3 ml-[199px] mt-[19px]' type="submit" value="Register" id="button"/>
        </form>
    </div>
  )
}

export default App