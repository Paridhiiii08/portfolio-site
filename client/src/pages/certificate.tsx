// client/src/pages/Certificate.tsx
import React from "react";

const Certificate: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "#000" }}>
      <iframe
        src="/internship_certificate.pdf"
        title="Internship Certificate"
        width="100%"
        height="100%"
        style={{
          border: "none",
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
};

export default Certificate;
