import React from "react";

const Pagination = ({ pageNo, handlePrev, handleNext }) => {
  return (
    <div className="flex justify-center p-4 mt-8 gap-2">
      {/* <div className="Pagination rounded-2xl"> */}
        <div className="Pagination px-8 cursor-pointer" onClick={handlePrev}>
          <i class="Pagination ri-arrow-left-circle-fill"></i>
        </div>
        <div className="text-gray-200 font-bold">{pageNo}</div>
        <div className="Pagination px-8 cursor-pointer" onClick={handleNext}>
          <i class="Pagination ri-arrow-right-circle-fill"></i>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Pagination;
