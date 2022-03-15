import React from "react"
import moment from "moment"
const SpaceList = (props) =>{
    return(
        <div>

{/* <div class="bg-white shadow overflow-hidden sm:rounded-lg">
<div class="border-t border-gray-200"> */}
{/* <table class="sm:shadow-2xl border-collapse w-fullxx">
  <thead class="sm:visible invisible absolute sm:relative bg-gray-100">
    <tr class="border-t-2 border-gray-400 sm:flexxx sm:inline-block">
      <th class="text-left text-gray-700 capitalize px-4 py-4"> Launch Title</th>
      <th class="text-left text-gray-700 capitalize px-4 py-4">Launch Details</th>
      <th class="text-left text-gray-700 capitalize px-4 py-4">Launch Date</th>
      <th class="text-left text-gray-700 capitalize px-4 py-4">Launch Success</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-t-2 border-gray-400 sm:flexxx sm:inline-block">
      <td  class="pl-4 sm:pl-0 pt-8 sm:pt-0 pb-2 sm:text-center text-left text-gray-800 relative w-2/4 border-t border-l sm:border-l-0 border-gray-400">{props.launctitle}</td>
      <td class="pl-4 sm:pl-0 pt-8 sm:pt-0 pb-2 sm:text-center text-left text-gray-800 relative w-2/4 border-t border-l sm:border-l-0 border-gray-400" >{props.launchdetails}</td>
      <td  class="pl-4 sm:pl-0 pt-8 sm:pt-0 pb-2 sm:text-center text-left text-gray-800 relative w-2/4 border-t border-l sm:border-l-0 border-gray-400">{props.launchdate}</td>
      <td  class="pl-4 sm:pl-0 pt-8 sm:pt-0 pb-2 sm:text-center text-left text-gray-800 relative w-2/4 border-t border-l sm:border-l-0 border-gray-400"> {props.launchsuccess}</td>
      
    </tr>
   
  </tbody>
</table> */}
 
  {/* {/* <div class="border-t border-gray-200">
    <dl>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">{props.launctitle}</dt>
        <dt class="text-sm font-medium text-gray-500">{props.launchdetails}</dt>
        <dt class="text-sm font-medium text-gray-500">{props.launchdate}</dt>
        <dt class="text-sm font-medium text-gray-500">{props.launchsuccess}</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
      </div>
     
     
    </dl> */}
{/* </div>
</div> */}



<div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
                <table class="min-w-full">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Launch Title
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Launch Details
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Launch Date
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Launch Success
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Youtube Link
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {props.launchtitle ? props.launchtitle : "Title Not Given" }
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                               {props.launchdetails ? props.launchdetails :"Details Not Given"}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                               {props.launchdate ? moment(props.launchdate).format('DD-MM-YYYY') : "Date Not Given"}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {props.launchsuccess === true  ? "Success": "Success Not Given" }
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {props.youtube ? props.youtube: "Link Not Given" }
                            </td>
                            
                        </tr>
                       
                        {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Imac 27"
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                White
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                Desktop Pc
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                $1999
                            </td>
                           
                        </tr>
                       
                        <tr class="bg-white dark:bg-gray-800">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Magic Mouse 2
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                White
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                Accessories
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                $99
                            </td>
                           
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
            
         </div>
    )
}


export default SpaceList