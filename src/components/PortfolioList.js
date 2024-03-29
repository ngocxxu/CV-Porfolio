import { Skeleton } from "antd";
import { Info } from "../info";
import { useState } from "react";

export const PortfolioCodingList = () => {
  const [imageLoaded, setImageLoaded] = useState(false); // Trạng thái hiển thị hình ảnh đã tải xong hay chưa

  const handleImageLoad = () => {
    setImageLoaded(true); // Đặt trạng thái là đã tải xong khi hình ảnh được tải thành công
  };
  const handleNavigate = (link) => window.open(link, "_blank");
  return (
    <>
      {Info.portfolioPage.coding.map((item, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4"
        >
          {!imageLoaded && <Skeleton.Image active={imageLoaded} />}
          <img
            className="w-full"
            src={item.porfolioImage}
            alt="democinema"
            onLoad={handleImageLoad} // Gọi hàm khi hình ảnh được tải xong
            style={{ display: imageLoaded ? "block" : "none" }} // Ẩn/hiện hình ảnh tùy thuộc vào trạng thái đã tải xong hay chưa
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-600">
              {item.title}
            </div>
            <p className="text-gray-400 text-base">{item.description}</p>
            <div className="flex justify-between space-x-2 mt-6">
              {item.linkGithub2 ? (
                <div className="flex w-1/2 gap-1">
                  <button
                    onClick={() => handleNavigate(item.linkGithub)}
                    className="w-full bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl transition duration-500 ease-in-out"
                  >
                    Git FE
                  </button>
                  <button
                    onClick={() => handleNavigate(item.linkGithub2)}
                    className="w-full ml-auto bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl transition duration-500 ease-in-out"
                  >
                    Git BE
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavigate(item.linkGithub)}
                  className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out"
                >
                  Github
                </button>
              )}

              <button
                onClick={() => handleNavigate(item.linkDemo)}
                className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out"
              >
                Demo
              </button>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            {item.hashtag.map((item, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const PortfolioDesignList = () => {
  const [imageLoaded, setImageLoaded] = useState(false); // Trạng thái hiển thị hình ảnh đã tải xong hay chưa

  const handleImageLoad = () => {
    setImageLoaded(true); // Đặt trạng thái là đã tải xong khi hình ảnh được tải thành công
  };
  const handleNavigate = (link) => window.open(link, "_blank");
  return (
    <>
      {Info.portfolioPage.design.map((item, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4"
        >
          {!imageLoaded && <Skeleton.Image active={imageLoaded} />}
          <img
            className="w-full"
            src={item.porfolioImage}
            alt="democinema"
            onLoad={handleImageLoad} // Gọi hàm khi hình ảnh được tải xong
            style={{ display: imageLoaded ? "block" : "none" }} // Ẩn/hiện hình ảnh tùy thuộc vào trạng thái đã tải xong hay chưa
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-600">
              {item.title}
            </div>
            <p className="text-gray-400 text-base">{item.description}</p>
            <div className="flex justify-between space-x-2 mt-6">
              <button
                onClick={() => handleNavigate(item.linkDemo)}
                className="bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-full transition duration-500 ease-in-out"
              >
                Demo
              </button>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            {item.hashtag.map((item, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
