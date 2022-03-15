import React,{useEffect, useReducer } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Navbar from "./component/Navbar"
import Spacelist from "./component/Spacelist"

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SpaceApi />
    </QueryClientProvider>
  )
}

function SpaceApi() {

  const initialState = {
   startdate:"",
   enddate:"",
   list:[]
  };


  const reducer = (state, action) => {
    switch (action.type) {
      case 'startdate':
        return {
         ...state,
       startdate:action.payload
        };
      case 'enddate':
        return {
          ...state,
          enddate:action.payload
        };
        case 'getlist':
          return{
          //...state,
          list :action.payload
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state start and end",state.startdate,state.enddate,state.list)
  




  const { isLoading, error, refetch, data } = useQuery('getspaceshipdata', () =>
  fetch(`https://api.spacexdata.com/v3/launches?start=${state.startdate}&end=${state.enddate}`)
  .then(function(response) {
   
console.log("data",data)

    return response.json();
  })

    ,{
      refetchOnWindowFocus: false,
      enabled: false
    }
  )


  useEffect(()=>{
    if(data){
      dispatch({ type: "getlist", payload: data })
    }
  },[data])



const handleSubmit = (e) => {
  e.preventDefault()
 refetch()
}
  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  
  return (
    <div>
<Navbar/>



<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">SPACEX API</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> History and Upcoming launches</a>
      </p>
    </div>
    <form class="mt-8 space-y-6" method="POST">
    
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="start-date" class="sr-only">Start Date</label>
          <input id="start-date" name="startdate" 
          
           onChange={(e) => dispatch({ type: "startdate", payload: e.target.value })} type="date" autocomplete="email" required class="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Start Date"/>
        </div>
        <div>
          <label for="end-date" class="sr-only">End Date</label>
          <input id="end-date" name="enddate"
         
          onChange={(e) => dispatch({ type: "enddate", payload: e.target.value })} type="date" autocomplete="current-password" required class="appearance-none rounded-none relative block mt-2 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="End Date"/>
        </div>
      </div>

     

      <div>
        <button onClick={handleSubmit} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          FIND
        </button>

       
      </div>
    </form>
  </div>
</div>



{state.list && state.list.map((launch,index)=>{
   return(
     <div key={index} >
    <Spacelist launchtitle={launch.mission_name} launchdate={launch.launch_date_local} launchdetails={launch.rocket.rocket_name} launchsuccess={launch.launch_success} youtube={launch.links.video_link} />
     </div>
   )
})}



    </div>
  )
}

