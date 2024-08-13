import React from 'react'

const FirstPage = () => {
  return (
    <main>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <label htmlFor="inp1">name</label>
        <input type="text" id='inp1' placeholder='e.g. Stephen King' />

        <label htmlFor="inp2">Email Address</label>
        <input type="email" id='inp2' placeholder='e.g. stephenking@lorem.com' />

        <label htmlFor="inp3">phone number</label>
        <input type="number" id='inp3' placeholder='e.g. +1 234 567 890' />
      </form>

      <div>
        <button>Next Step</button>
      </div>
    </main>
  )
}

export default FirstPage