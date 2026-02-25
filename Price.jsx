import React from "react";

function Price() {
  return (
    <div className="bg-orange-300 flex justify-center gap-62 p-16">
      <div className=" px-4 py-12 mt-12 ">
        <h2 className="text-5xl font-bold text-amber-50">Pricing</h2>
        <div className="w-32 h-1 bg-amber-50 rounded-full mt-3.5"></div>
        <p className="text-gray-700 text-lg mt-4 max-w-xl">
          We have simple and understandable prices for any services, regardless
          of their type.
        </p>
      </div>
      <div className="w-[400px] h-auto p-4 bg-white rounded-lg shadow-lg ">
        <div className="text-center">
          <h1 className="font-bold text-2xl mt-2.5">Call Out Fee</h1>
          <h1 className="text-orange-300 text-7xl font-bold mt-1.5 mb-1.5">
            $35
          </h1>
          <span className="text-gray-700 text-xl">paid once</span>
          <div className="text-left ml-18">
            <ul className="text-gray-700 mt-6">
              <li className="">🟠 Any house and garden jobs</li>
              <li className="mt-2">🟠 asdnsd fdsfsd fdjkjdfd g</li>
              <li className="mt-2">🟠 Lorem ipsum dolor sit </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
