import { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiMoney, BiFile, BiLink, BiUser, BiIdCard, BiCommentDetail } from "react-icons/bi";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    applyForPosition: "",
    jobId: "",
    tellmeAboutYou: "",
    resume: null,
    portfolioLink: "",
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Valid 10-digit phone number is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    setLoading(true);
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
  
    try {
      const response = await fetch("https://issc-backend-app.vercel.app/job-form/submit", {
        method: "POST",
        body: formDataToSend,
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Application Submitted Successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          currentCTC: "",
          expectedCTC: "",
          noticePeriod: "",
          applyForPosition: "",
          jobId: "",
          tellmeAboutYou: "",
          resume: null,
          portfolioLink: "",
        });
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };
  

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Job Application</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Tell us more about you so we can get back to you with more info.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "firstName", placeholder: "First Name", icon: <AiOutlineUser className="text-xl" /> },
          { name: "lastName", placeholder: "Last Name", icon: <AiOutlineUser className="text-xl" /> },
          { name: "email", placeholder: "Email", icon: <AiOutlineMail className="text-xl" /> },
          { name: "phone", placeholder: "Phone Number", icon: <AiOutlinePhone className="text-xl" /> },
          { name: "currentCTC", placeholder: "Current CTC", icon: <BiMoney className="text-xl" /> },
          { name: "expectedCTC", placeholder: "Expected CTC", icon: <BiMoney className="text-xl" /> },
          { name: "noticePeriod", placeholder: "Notice Period", icon: <BiMoney className="text-xl" /> },
          { name: "applyForPosition", placeholder: "Apply for position", icon: <BiUser className="text-xl" /> },
          { name: "jobId", placeholder: "Job ID", icon: <BiIdCard className="text-xl" /> },
          { name: "tellmeAboutYou", placeholder: "Tell me about yourself", icon: <BiCommentDetail className="text-xl" /> }
        ].map((field) => (
          <div key={field.name}>
            <div className="flex items-center border rounded p-2 space-x-2">
              {field.icon}
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 focus:outline-none"
                required
              />
            </div>
            {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
          </div>
        ))}

        <div className="border p-4 rounded text-center flex items-center space-x-2">
          <BiFile className="text-xl" />
          <input type="file" onChange={handleFileChange} className="w-full" accept=".pdf,.doc,.docx" />
        </div>
        
        <div>
          <div className="flex items-center border rounded p-2 space-x-2">
            <BiLink className="text-xl" />
            <input
              type="text"
              name="portfolioLink"
              placeholder="Submit your Behance or portfolio link"
              value={formData.portfolioLink}
              onChange={handleChange}
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
}