import React from 'react'

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
  return (
    <div>
    <h2>Welcome to the Dashboard, {user.name}</h2>
    <p>This is your personalized dashboard.</p>
    {/* Add more dashboard components and features as needed */}
  </div>
  )
}

export default Dashboard