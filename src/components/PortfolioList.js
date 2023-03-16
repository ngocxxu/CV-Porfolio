import { Info } from '../info';

export const PortfolioCodingList = () => (
  <>
    {Info.portfolioPage.coding.map((item, index) => (
      <div
        key={index}
        className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4'
      >
        <img className='w-full' src={item.porfolioImage} alt='democinema' />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-gray-600'>
            {item.title}
          </div>
          <p className='text-gray-400 text-base'>{item.description}</p>
          <div className='flex justify-between space-x-2 mt-6'>
            {item.linkGithub2 ? (
              <div className='flex w-1/2 gap-1'>
                <button className='w-full bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl transition duration-500 ease-in-out'>
                  <a
                    className='text-gray-100 hover:text-gray-100'
                    href={item.linkGithub}
                  >
                    Git FE
                  </a>
                </button>
                <button className='w-full ml-auto bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl transition duration-500 ease-in-out'>
                  <a
                    className='text-gray-100 hover:text-gray-100'
                    href={item.linkGithub2}
                  >
                    Git BE
                  </a>
                </button>
              </div>
            ) : (
              <button className='bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out'>
                <a
                  className='text-gray-100 hover:text-gray-100'
                  href={item.linkGithub}
                >
                  Github
                </a>
              </button>
            )}

            <button className='bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out'>
              <a
                className='text-gray-100 hover:text-gray-100'
                href={item.linkDemo}
              >
                Demo
              </a>
            </button>
          </div>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {item.hashtag.map((item, index) => (
            <span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </>
);

export const PortfolioDesignList = () => (
  <>
    {Info.portfolioPage.design.map((item, index) => (
      <div
        key={index}
        className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 m-4'
      >
        <img className='w-full' src={item.porfolioImage} alt='democinema' />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-gray-600'>
            {item.title}
          </div>
          <p className='text-gray-400 text-base'>{item.description}</p>
          <div className='flex justify-between space-x-2 mt-6'>
            <button className='bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out'>
              <a
                className='text-gray-100 hover:text-gray-100'
                href={item.linkGithub}
              >
                Github
              </a>
            </button>
            <button className='bg-gray-600 hover:bg-yellow-600 p-2 rounded-xl w-1/2 transition duration-500 ease-in-out'>
              <a
                className='text-gray-100 hover:text-gray-100'
                href={item.linkDemo}
              >
                Demo
              </a>
            </button>
          </div>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {item.hashtag.map((item, index) => (
            <span
              key={index}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-gray-100 hover:bg-yellow-500 cursor-pointer transition duration-500 ease-in-out'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </>
);