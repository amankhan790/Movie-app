import React from "react";

const Pagination = ({ pageNo, handlePrev, handleNext }) => {
  return (
    <div className="bg-gray-400 flex justify-center p-4 mt-8">
      <div className="px-8 cursor-pointer" onClick={handlePrev}>
        <i class="ri-arrow-left-circle-fill"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8 cursor-pointer" onClick={handleNext}>
        <i class="ri-arrow-right-circle-fill"></i>
      </div>
    </div>
  );
};

export default Pagination;
