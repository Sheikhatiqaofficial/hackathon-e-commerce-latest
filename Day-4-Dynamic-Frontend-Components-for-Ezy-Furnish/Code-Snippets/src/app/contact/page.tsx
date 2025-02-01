// "use client"
// import React, { useState } from "react";
// import Topnav from "../components/Topnav";

// const Contact = () => {
//   // Using React state to manage form data
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);

//   // Handling input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value, // Update the specific field
//     });
//   };

//   // Handling form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Creating a new FormData object for submitting the form
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("message", formData.message);

//     try {
//       // Send the form data to Formspree or your backend service
//       const response = await fetch("https://formspree.io/f/{your_form_id}", {
//         method: "POST",
//         body: data,
//         headers: {
//           "Accept": "application/json",
//         },
//       });

//       if (response.ok) {
//         setIsSuccess(true);
//         setFormData({ name: "", email: "", message: "" }); // Reset form after submission
//       } else {
//         throw new Error("Form submission failed.");
//       }
//     } catch{
//       setIsError(true);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//     <Topnav/>
//     <div className="w-full bg-gray-100 py-16">
//       <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="sm:col-span-2">
//               <label htmlFor="name" className="block text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name" // This allows us to track the name field
//                 value={formData.name} // Get the name from state
//                 onChange={handleChange}
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="email" className="block text-gray-700">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email" // This allows us to track the email field
//                 value={formData.email} // Get the email from state
//                 onChange={handleChange}
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="message" className="block text-gray-700">Message</label>
//               <textarea
//                 id="message"
//                 name="message" // This allows us to track the message field
//                 value={formData.message} // Get the message from state
//                 onChange={handleChange}
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                 rows={6}
//                 required
//               />
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <button
//               type="submit"
//               className={`w-full sm:w-auto py-3 px-6 text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : 'Send Message'}
//             </button>
//           </div>

//           {isSuccess && (
//             <div className="mt-4 text-center text-green-600">Thank you for contacting us! We will get back to you soon.</div>
//           )}
//           {isError && (
//             <div className="mt-4 text-center text-red-600">Something went wrong, please try again later.</div>
//           )}
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };
// 'use client';
// // export default Contact;
// import React, { useState } from "react";
// import Topnav from "../components/Topnav";

// const Contact = () => {
//   const [formStatus, setFormStatus] = useState<string>("");

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const form = e.target as HTMLFormElement;
//     const formData = new FormData(form);
    
//     // Show submitting status
//     setFormStatus("Submitting...");

//     try {
//       const res = await fetch("/", {
//         method: "POST",
//         body: formData,
//       });

//       if (res.ok) {
//         setFormStatus("Thank you for your message!");
//         form.reset();
//       } else {
//         setFormStatus("Something went wrong, please try again.");
//       }
//     } catch {
//       setFormStatus("Something went wrong, please try again.");
//     }
//   };

//   return (
//     <>
//     <Topnav/>
//     <div className="w-full bg-white opacity-1 sm:ml-0 sm:mt-[80px] lg:mt-[120px] mb-[50px]">
//       <div className="w-full h-[39px] mt-[100px] mx-auto text-center lg:text-left opacity-1">
//         <h3 className="text-[#2A254B] text-5xl font-normal leading-[39.36px] lg:ml-[42px]">
//           Contact Us
//         </h3>
//       </div>

//       <form
//         name="contact"
//         method="POST"
//         data-netlify="true"
//         onSubmit={handleSubmit}
//         className="flex flex-col sm:w-[500px] mx-auto mt-8"
//       >
//         {/* Hidden Input for Netlify */}
//         <input type="hidden" name="form-name" value="contact" />

//         <label className="mb-2 text-[#2A254B]">Name</label>
//         <input
//           type="text"
//           name="name"
//           required
//           className="border-2 border-[#ccc] rounded-md p-3 mb-4"
//         />

//         <label className="mb-2 text-[#2A254B]">Email</label>
//         <input
//           type="email"
//           name="email"
//           required
//           className="border-2 border-[#ccc] rounded-md p-3 mb-4"
//         />

//         <label className="mb-2 text-[#2A254B]">Message</label>
//         <textarea
//           name="message"
//           required
//           className="border-2 border-[#ccc] rounded-md p-3 mb-4"
//         />

//         <button
//           type="submit"
//           className="w-full bg-[#F9F9F9] text-[#2A254B] py-2 mt-4 rounded-md hover:bg-[#2A254B] hover:text-white"
//         >
//           Submit
//         </button>

//         {formStatus && (
//           <p className="text-center text-[#2A254B] mt-4">{formStatus}</p>
//         )}
//       </form>
//     </div>
//     </>
//   );
// };

// export default Contact;
'use client';
import React, { useState } from "react";
import Topnav from "../components/Topnav";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formDataObj = Object.fromEntries(formData.entries());

    try {
      // Send the form data to Formspree
      const res = await fetch('https://formspree.io/f/mnnjpjpb', {  // Replace with your Formspree URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
      });

      if (res.ok) {
        setFormStatus("Thank you for your message!");
        form.reset();
      } else {
        setFormStatus("Something went wrong, please try again.");
      }
    } catch {
      setFormStatus("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <Topnav />
      <div className="w-full bg-gradient-to-r from-teal-400 via-pink-500 to-orange-400 text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto text-center sm:text-left">
          <h3 className="text-4xl font-semibold leading-tight text-white">
            Get In Touch With Us
          </h3>
          <p className="mt-4 text-lg sm:max-w-2xl mx-auto text-white opacity-80">
            We are here to assist you. Whether it is a question or feedback, feel free to reach out!
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          action="https://formspree.io/f/mwkaznqp"  // Formspree URL
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto mt-8 px-4 py-8 bg-white rounded-xl shadow-2xl space-y-6"
        >
          {/* Hidden Input for Formspree */}
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
          <input type="hidden" name="_subject" value="New contact form submission" />
          
          <div>
            <label className="text-xl font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border-2 border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-300 text-black"
            />
          </div>

          <div>
            <label className="text-xl font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-2 border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-300"
            />
          </div>

          <div>
            <label className="text-xl font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full text-black border-2 border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-medium rounded-md bg-gradient-to-r from-teal-500 to-pink-500 hover:from-teal-600 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>

          {formStatus && (
            <p
              className={`text-center mt-4 font-semibold ${
                formStatus.includes("Thank you") ? "text-green-600" : "text-red-500"
              }`}
            >
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
