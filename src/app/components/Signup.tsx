import React from "react";

const Signup = () => {
  return (
    <div className="w-full h-auto p-6 md:p-16 opacity-1 bg-[#F9F9F9] mb-[50px] mt-[50px]"> {/* Added margin-bottom for separation */}
      {/* Inner Container */}
      <div className="max-w-screen-xl mx-auto h-auto mt-4 p-6 md:p-16 opacity-1 bg-white">
        {/* Heading and Paragraph Section */}
        <div className="w-full h-auto mt-4 ml-0 gap-4 opacity-1">
          {/* Heading */}
          <h1 className="w-full text-2xl sm:text-3xl md:text-4xl text-center text-[#2A254B] font-medium">
            Join the club and get the benefits
          </h1>
          {/* Paragraph */}
          <p className="w-full text-base sm:text-lg md:text-xl text-center text-[#2A254B] mt-4">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center px-4 py-6 md:px-16 md:py-14 h-auto bg-white opacity-1">
          {/* Email Input Section (Row with Input and Button) */}
          <div className="flex items-center justify-center mt-6 w-full max-w-xl h-auto opacity-1">
            {/* Email Input Field */}
            <div className="flex items-center justify-start w-full sm:w-3/4 md:w-3/4 bg-[#F9F9F9] px-4 sm:px-6 py-4 opacity-1">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full text-[#2A254B] text-lg font-normal bg-[#F9F9F9] focus:outline-none"
              />
            </div>


            {/* <button */}
            <button
              className="w-[118px] h-[56px] bg-[#2A254B] text-white font-medium text-lg flex items-center justify-center"
            >
              Sign up
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Signup;
