import React from 'react';
import './booking.css';
export default function Component() {
  return (
   
          <form className="form">
        
              <h1 className="booking">Booking Confirmation</h1>
              <div className="buttons">
                <button   type="button"   className="btnbc">
                  <DownloadIcon className="h-4 w-4 mr-2" /> Download Details </button>
           
                <button   type="submit"className="btnbc">Complete Booking </button>
               

              </div>
          

        <table>
           <tr><td>
              
              <div className='payment'>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Payment</h2>
                <div className="paymentdt">
                  <div>
                    <label className="text-gray-500 dark:text-gray-400">Payment Method</label>
                    <input
                      type="text"
                      defaultValue="Visa ending in 1234"
                      className="in1"
                    />
                  </div>
                  <div >
                    <label className="text-gray-500 dark:text-gray-400">Subtotal</label>
                    <input
                      type="text"
                      defaultValue="$800"
                      className="in2"
                    />
                  </div>
                  <div >
                    <label className="text-gray-500 dark:text-gray-400">Taxes and Fees</label>
                    <input
                      type="text"
                      defaultValue="$120"
                      className="in3"
                    />
                  </div>
                  <div >
                    <label className="text-gray-500 dark:text-gray-400">Total</label>
                    <input
                      type="text"
                      defaultValue="$920"
                      className="in4"
                    />
                  </div>
                </div>
              </div>
              </td>
              <td>

              <div className='right'>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Trip Details</h2>
                <div className="mt-4 space-y-4">
                  <div >
                    <label className="text-gray-500 dark:text-gray-400">Departure</label>
                    <input
                      type="text"
                      defaultValue="New York, NY"
                      className="in5"
                    />
                  </div>
                  <div >
                    <label className="text-gray-500 dark:text-gray-400">Arrival</label>
                    <input
                      type="text"
                      defaultValue="Los Angeles, CA"
                      className="in6"
                    />
                  </div>
                  <div >
                    <label className="text-gray-500 dark:text-gray-400">Departure Date</label>
                    <input
                      type="date"
                      defaultValue="2023-06-15"
                      className="in7"
                    />
                  </div>
                  {/* <div >
                    <label className="text-gray-500 dark:text-gray-400">Return Date</label>
                    <input
                      type="date"
                      defaultValue="2023-06-22"
                      className="in8"
                    />
                  </div> */}
                  <div >
                    <label className="text-gray-500 dark:text-gray-400">Passengers</label>
                    <input
                      type="text"
                      defaultValue="2 Adults"
                      className="in9"
                    />
                  </div>
                </div>
              </div>
        
          </td></tr> 
        </table>
        </form>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
