import React from "react";

type CharacterProps = {
  name?: string;
  image?: string;
  dimension?: string;
  status?: string;
  episode?: string;
  id?: string;
};

export const CharacterCard: React.FC<CharacterProps> = ({
  image,
  name,
  dimension,
  status,
  episode,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white shadow-md  rounded-3xl p-4">
          <div className="flex-none lg:flex">
            <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
              <img
                src={image}
                alt="Just a flower"
                className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
              />
            </div>
            <div className="flex-auto ml-3 justify-evenly py-2">
              <div className="flex flex-wrap ">
                {/* <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                  Shop
                </div> */}
                <h2 className="flex-auto text-lg font-medium">{name}</h2>
              </div>
              <p className="mt-3"></p>
              <div className="flex py-4  text-sm text-gray-600 gap-1">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p className="">Last known location:</p>
                </div>
                <div className="flex items-center">
                  <p className="">{dimension}</p>
                </div>
              </div>
              <div className="flex py-4  text-sm text-gray-600 gap-1">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="">Status:</p>
                </div>
                <div className="flex items-center">
                  <p className="">{status}</p>
                </div>
              </div>
              <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div className="flex space-x-3 text-sm">
                <div className="flex-auto flex space-x-3">
                  <p>
                    First seen in:{" "}
                    <span className="font-medium">{episode}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
