import React from 'react'


const Navbar = () => {
    return (
        <div>
          <nav class="bg-gray-600">
  
  <div class=" flex items-center justify-center h-16">
     <h1 class="text-white">SPACEX API</h1>
  
</div>


<div class="sm:hidden" id="mobile-menu">
  <div class="px-2 pt-2 pb-3 space-y-1">
    
    <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
  </div>
</div>
</nav>
        </div>
    )
}


export default Navbar