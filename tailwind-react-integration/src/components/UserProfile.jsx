import React from "react";

function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img 
      src="https://via.placeholder.com/150"
      alt="User"
      classname="rounded-full w-32 h-32 mx-auto mb-4"
      />
      <h1 classname="text-x1 text-blue-800 my-4 text-center">John Doe</h1>
      <p clasname="text-gray-600 text-base text-center">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;