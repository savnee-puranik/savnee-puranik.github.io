import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col items-center h-screen p-4">
      <h1 className="text-3xl font-bold my-4">My Résumé</h1>
      <div className="w-full max-w-4xl h-full">
        <iframe
          src="/Savnee_Resume.pdf"  
          title="Savnee Resume"
          className="w-full h-[80vh]"
          style={{
            flexGrow: 2,
            height: "calc(100vh)", // fill most of the viewport minus header
            width: "900px",
            border: "2px solid #ccc",
            borderRadius: "1px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default Resume;