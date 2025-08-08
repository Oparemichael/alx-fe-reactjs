import React from "react";

function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 md:max-w-sm max-w-xs sm:max-w-sm mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg">
      <img 
      src="https://via.placeholder.com/150"
      alt="User"
      classname="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 "
      />
      <h1 classname="text-lg md:text-xl sm:text-x1 md:text-2x1 font-bold sm:mb-2 text-blue-800 my-4 text-center">John Doe</h1>
      <p clasname="text-gray-600 text-base text-center text-sm sm:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;