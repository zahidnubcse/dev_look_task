import React from 'react'

export default function NoticeBar() {
  return (
    <div className="w-full">
      <div className="group flex items-center justify-center p-1 ml-2 mr-2 bg-[#B2F6E3] rounded-full hover:rounded-[10px] mt-2 cursor-pointer font-semibold transition-all duration-200">
        
        {/* Rolling text */}
        <span className="block h-6 overflow-hidden text-sm">
          <span className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-6">
            
            <span className="text-center">
              🚨 Where are your customers actually searching? Download the report
            </span>

            <span className="text-center">
              🚨 Where are your customers actually searching? Download the report
            </span>

          </span>
        </span>

      </div>
    </div>
  )
}