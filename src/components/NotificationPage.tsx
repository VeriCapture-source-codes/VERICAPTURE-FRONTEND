import React from 'react';

interface NotificationProps {
  name: string;
  message: string;
  avatar: string;
  group?: boolean;
}

const notifications: NotificationProps[] = [
  {
    name: 'Bryan Ezilora',
    message: 'Just posted an update you might be interested in',
    avatar: '/notification image01.png',
  },
  {
    name: 'Ruth, Davida, Stephen',
    message: 'New Update from Ruth, Davida, Stephen',
    avatar: 'group image.png',
    group: true,
  },
  {
    name: 'Mary Smith',
    message: 'Just shared a crime update around your location. Check it out',
    avatar: '/notification image04.png',
  },
  {
    name: 'Benita Charles',
    message: 'Updated a riot update close to you.',
    avatar: '/notification image03.png',
  },
  {
    name: 'Group Vote',
    message: 'People are Up-Voting Mary Crime Update. Check it out.',
    avatar: '/notification image02.png',
    group: true,
  },
];

//Top component of the notification page
const TopBar = () => (
  <header className="flex items-center justify-between py-2 px-4">
    <img src="/Logo.png" alt="logo" className="object-contain h-8" />
    <div className="flex flex-col items-center ">
      <img src="/vericapture image.png" alt="vericapture image" />
    </div>
    <img
      src="avatar image.png"
      alt="user avatar"
      className="w-8 h-8 rounded-full object-cover"
    />
  </header>
);

// Bottom navigation component
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

const NotificationCard: React.FC<NotificationProps> = ({
  name,
  message,
  avatar,
}) => (
  <div className="flex items-start gap-3 px-4 py-3 border-b border-gray-200">
    <img
      src={avatar}
      alt={name}
      className="w-10 h-10 rounded-full object-cover"
    />
    <div className="flex flex-col text-sm">
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-gray-600">{message}</p>
    </div>
    <div className="ml-auto text-gray-400">•••</div>
  </div>
);

const NewsAlertSection = () => (
  <div className="divide-y divide-gray-100 pb-20">
    {notifications.map((notif, index) => (
      <NotificationCard key={index} {...notif} />
    ))}

    {/* Ad Banner */}
    <div
      className="rounded-xl mb-5 bg-no-repeat bg-cover bg-center h-48 w-full"
      style={{ backgroundImage: "url('/banner image.png')" }}
    ></div>

    {/* Repeating Notifications */}
    {notifications.map((notif, index) => (
      <NotificationCard key={`repeat-${index}`} {...notif} />
    ))}
  </div>
);

const NewsAlertPage = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen relative pb-24 shadow">
      <TopBar />

      {/* Top Banner */}
      <div className="w-full bg-teal-300 text-white text-xs px-4 py-2 flex justify-between items-center">
        <p>Spend 70% less on food - 2km near you</p>
        <div className="bg-white text-teal-600 font-semibold px-2 py-1 rounded text-xs">
          00:30
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="mt-6">
        <div className="flex gap-1 bg-gray-100 rounded-full p-1 max-w-md mx-auto">
          <button className="flex-1 px-4 py-2 rounded-full text-sm font-medium text-gray-600 bg-white">
            All
          </button>
          <button className="flex-1 px-4 py-2 rounded-full text-sm font-medium bg-teal-500 text-white shadow-sm">
            News Alert
          </button>
          <button className="flex-1 px-4 py-2 rounded-full text-sm font-medium text-gray-600 bg-white">
            Interactions
          </button>
        </div>
      </div>

      {/* Notification Section */}
      <NewsAlertSection />

      <BottomNavigation />
    </div>
  );
};

export default NewsAlertPage;
