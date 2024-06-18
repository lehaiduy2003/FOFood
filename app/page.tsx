'use client'
export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => {
        window.location.href = '/sign-in'
      }}>login</button>
    </>
  )
}
