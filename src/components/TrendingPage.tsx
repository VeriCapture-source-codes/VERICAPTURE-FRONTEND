// TopBar Component
const TopBar = () => (
  <header className="flex items-center justify-between py-2">
    <img src="/Logo.png" alt="logo" className="object-contain" />

    <div className="flex flex-col items-center text-[16px] dark:text-gray-800">
      <span>Enter a Location Here..</span>
    </div>

    <img
      src="avatar image.png"
      alt="user avatar"
      className="w-8 h-8 rounded-full object-cover"
    />
  </header>
);

// BottomNavigation Component
const BottomNavigation = () => (
  <div className="flex justify-center">
    <nav className="w-full max-w-md bg-white border-t border-gray-400 py-2 flex justify-around fixed bottom-0 left-1/2 transform -translate-x-1/2">
      {[
        { image: '/home icon.png', label: 'Home', textClass: 'text-[#00ECD0]' },
        { image: '/trend icon.png', label: 'Trends' },
        {
          image: '/Go live icon.png',
          label: 'Go Live',
          textClass: 'text-red-500',
        },
        { image: '/explore icon.png', label: 'Maps' },
        { image: '/notification.png', label: 'Notification' },
      ].map(({ image, label, textClass = 'text-black-600' }) => (
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

// TrendingFeed Component
const TrendingFeed = () => {
  const feedItems = [
    {
      location: 'Lekki Epe Expressway, Lagos',
      posts: '13,046',
      tags: ['Riot', 'Accident', 'Traffic', 'Others'],
    },
    {
      location: 'Jibowu Yaba, Lagos',
      posts: '9,534',
      tags: ['Riot', 'Accident'],
    },
    {
      location: 'Ilupeju, Obanikoro, Lagos',
      posts: '5,983',
      tags: ['Traffic'],
    },
    {
      location: 'Rumuokoro, Portharcourt',
      posts: '2,764',
      tags: ['Riot'],
    },
    {
      location: 'Lekki Epe Expressway, Lagos',
      posts: '13,046',
      tags: ['Riot', 'Accident', 'Traffic', 'Others'],
    },
    {
      location: 'Lekki Epe Expressway, Lagos',
      posts: '13,046',
      tags: ['Riot', 'Accident', 'Traffic', 'Others'],
    },
  ];

  const tagColors: Record<string, string> = {
    Riot: 'bg-[#f82828]',
    Accident: 'bg-[#002a66]',
    Traffic: 'bg-[#3398ff]',
    Others: 'bg-[#0f381e]',
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4 overflow-x-auto text-sm">
        {['Trending', 'Accident', 'Traffic', 'Riot', 'Crime', 'Robbery'].map(
          (tab) => (
            <span
              key={tab}
              className={`px-2 font-semibold whitespace-nowrap ${
                tab === 'Trending' ? 'text-teal-400' : 'text-gray-600'
              }`}
            >
              {tab}
            </span>
          )
        )}
      </div>

      <div className="bg-teal-100 text-teal-800 rounded-lg text-xs flex items-center justify-between px-3 py-2 mb-4">
        <span>Spend 70% less on food - 2km near you</span>
        <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
          00:30
        </span>
      </div>

      <div
        className="rounded-xl mb-5 bg-no-repeat bg-cover bg-center h-48 w-full"
        style={{ backgroundImage: "url('/banner image.png')" }}
      ></div>

      <div className="space-y-6">
        {feedItems.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <p className="font-semibold text-sm text-gray-800 mb-1">
              {item.location}
            </p>
            <p className="text-xs text-gray-500 mb-2">{item.posts} posts</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag + index}
                  className={`text-white text-xs px-4 py-2 rounded-full ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// General Component that includes all the above components
const TrendPage = () => {
  return (
    <div className="min-h-screen bg-white shadow text-black px-4 pt-2 pb-20 max-w-md mx-auto">
      <TopBar />
      <TrendingFeed />
      <BottomNavigation />
    </div>
  );
};

export default TrendPage;
