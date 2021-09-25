import React from "react";
import SEO from "../../../../gatsby-starter-tailwind-css/src/components/SEO";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <header className="p-4 bg-teal-500 text-white font-semibold">
          <h1 className="max-w-4xl mx-auto">gatsby-starter-tailwind-css</h1>
        </header>
        {children}
      </div>
    </>
  );
};

export default Layout;
