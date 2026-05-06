import React from 'react'

export default function NoticeBar() {
  return (
    <div className="w-full px-2 sm:px-3">
      <div className="group flex items-center justify-center p-1 px-3 bg-[#B2F6E3] rounded-full hover:rounded-[10px] mt-2 cursor-pointer font-semibold transition-all duration-200">

        {/* Rolling text */}
        <span className="block h-6 overflow-hidden text-xs sm:text-sm w-full text-center">
          <span className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-6">

            <span className="text-center truncate sm:whitespace-normal px-2">
              🚨 Where are your customers actually searching? Download the report
            </span>

            <span className="text-center truncate sm:whitespace-normal px-2">
              🚨 Where are your customers actually searching? Download the report
            </span>

          </span>
        </span>

      </div>
    </div>
  )
}