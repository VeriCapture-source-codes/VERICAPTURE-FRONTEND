// This is a simple feed page component that displays posts with user interactions and a bottom navigation bar.
const PostCard = () => (
  <div className="bg-white p-4 rounded-xl shadow mb-4">
    <div className="flex items-start gap-3">
      <div className="relative">
        <img
          src="/avatar01.png"
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover border-r-4 border-blue-500"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="flex items-center font-semibold text-sm  dark:text-black">
              Pastor Valentine
            </h4>
            <p className="text-xs text-black-500">Lekki-Epe Expressway • 22h</p>
          </div>
          <div className="flex items-center gap-1">
            <img src="/badge01.png" alt="badge1" className=" rounded-full" />
          </div>
        </div>

        <p className="mt-2 text-sm text-black-700">
          Truck tanker fails break and losses control causing serious traffic
        </p>

        <img
          src="/traffic image.png"
          alt="traffic scene"
          className="w-full h-52 object-cover rounded-lg mt-3"
        />

        <div className="mt-4 flex justify-between text-gray-500 dark:text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <img src="/Like button.png" alt="like button" />
            <span className="text-black">24k</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/comment button.png" alt="comment button" />
            <span className="text-black">11k</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/graphLike button.png" alt="graph button" />
            <span className="text-black">101k</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/forward button.png" alt="forward button" />
            <span className="text-black">87k</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// This component represents the top bar of the feed page, displaying the logo, location, and user avatar.
const TopBar = () => (
  <header className="flex items-center justify-between py-2">
    <img src="/Logo.png" alt="logo" className=" object-contain" />

    <div className="flex flex-col items-center text-[16px] dark:text-gray-800">
      <span>Vina estate, Badore, Ajah</span>
    </div>

    <img
      src="avatar image.png"
      alt="user avatar"
      className="w-8 h-8 rounded-full object-cover"
    />
  </header>
);

// This component represents the bottom navigation bar with icons for different sections of the app.
const BottomNavigation = () => (
  <div className="flex justify-center">
    <nav className="w-full max-w-md bg-white border-t border-gray-400 py-2 flex justify-around fixed bottom-0 left-1/2 transform -translate-x-1/2">
      {[
        { image: "/home icon.png", label: "Home", textClass: "text-[#00ECD0]" },
        { image: "/trend icon.png", label: "Trends" },
        {
          image: "/Go live icon.png",
          label: "Go Live",
          textClass: "text-red-500",
        },
        { image: "/explore icon.png", label: "Maps" },
        { image: "/notification.png", label: "Notification" },
      ].map(({ image, label, textClass = "text-black-600" }) => (
        <button
          key={label}
          className={`flex flex-col items-center text-xs ${textClass}`}
        >
          <img src={image} className="w-5 h-5 mb-1" alt={`${label}`} />
          {label}
        </button>
      ))}
    </nav>
  </div>
);

// This is the main feed page component that combines the top bar, post cards, and bottom navigation.
const FeedPage = () => (
  <div className="bg-white min-h-screen px-3 pt-2 pb-16 sm:max-w-md mx-auto">
    <TopBar />
    {[1, 2, 3].map((_, index) => (
      <PostCard key={index} />
    ))}
    <BottomNavigation />
  </div>
);

export default FeedPage;
