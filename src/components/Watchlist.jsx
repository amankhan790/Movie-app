import React from "react";

const Watchlist = () => {
  return (
    <>
    <div className="flex justify-center flex-wrap m-4">
      <div className="flex justify-center items-center bg-blue-400 w-[9rem] h-[3rem] rounded text-white font-bold mx-4">Action</div>
      <div className="flex justify-center items-center bg-gray-400/60 w-[9rem] h-[3rem] rounded text-white font-bold">Action</div>
    </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search for movies"
          className="h-[3rem] w-[18rem] border-black bg-gray-200 outline-none p-2"
        />
      </div>

      <div className="overfolw-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-5">
                <img
                  className="w-[10rem] h-[6rem]"
                  src={`https://imgs.search.brave.com/e2-yIs-j0MGjFTkbBk4SxjkcCj32e_rrqZ0sIr-Uk7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/bW92aWUtcG9zdGVy/LW1vdmllLW1vdmll/LW1vdmllLW1vdmll/LW1vdmllLW1vdmll/LWlzLWZyb20tbW92/aWVfMTE1ODc3NS02/MjIxLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA`}
                  alt=""
                />
                <div className="mx-10">The Movie</div>
              </td>
              <td>9.5</td>
              <td>9</td>
              <td>Action</td>
              <td className="text-red-800">Delete</td>
            </tr>
            <tr className="border-b-2">
              <td className="flex items-center px-6 py-5">
                <img
                  className="w-[10rem] h-[6rem]"
                  src={`https://imgs.search.brave.com/e2-yIs-j0MGjFTkbBk4SxjkcCj32e_rrqZ0sIr-Uk7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/bW92aWUtcG9zdGVy/LW1vdmllLW1vdmll/LW1vdmllLW1vdmll/LW1vdmllLW1vdmll/LWlzLWZyb20tbW92/aWVfMTE1ODc3NS02/MjIxLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA`}
                  alt=""
                />
                <div className="mx-10">The Movie</div>
              </td>
              <td>9.5</td>
              <td>9</td>
              <td>Action</td>
              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
