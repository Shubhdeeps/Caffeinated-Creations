export default function Avatar() {
  return (
    <div className="space-y-3">
      <div className="lg:w-72 lg:h-72 border rounded-full md:w-60 md:h-60 h-36 w-36 grid place-items-center">
        <img
          src="https://avatars.githubusercontent.com/u/74876996?v=4"
          className="lg:w-72 lg:h-72 border rounded-full md:w-60 md:h-60 h-36 w-36"
        />
      </div>
      <div className="-space-y-1">
        <div className="text-2xl font-bold">Shubhdeeps</div>
        <div className="text-lg font-light text-gray-500 dark:text-gray-300">
          Shubhdeep Singh
        </div>
      </div>
      <div>
        <p className="text-sm font-normal">
          Computer enthusiast with a strong will to try out new things. My
          passion is to share my knowledge with like-minded spirits.
        </p>
      </div>
      <div className="flex space-x-2">
        <div className=" text-lg">
          <span className="font-medium">20 </span>
          <span className="text-gray-500 dark:text-gray-300 text-sm font-light">
            followers
          </span>
        </div>
        <div className=" text-lg">
          <span className="font-medium">20 </span>
          <span className="text-gray-500 dark:text-gray-300 text-sm font-light">
            followings
          </span>
        </div>
      </div>
      <div>
        <div>Tallinn, Estonia</div>
        <div>https://shubhdeeps.web.app/</div>
      </div>
    </div>
  );
}
