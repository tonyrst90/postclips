import React from 'react';
import Image from 'next/image';

const AnalyticsHeader: React.FC = () => {
  const handleNotificationClick = () => {
    console.log('Notification clicked');
    // Add notification logic here
  };

  const handleHelpClick = () => {
    console.log('Help clicked');
    // Add help/support logic here
  };

  return (
    <header className="analytics-header-wrapper">
      {/* Main Header */}
      <div className="analytics-header">
        <div className="analytics-header__logo">
          <Image
            src="/assets/icons/analytics/logo.svg"
            alt="PostClips Logo"
            width={125}
            height={24}
            priority
          />
        </div>

        <div className="analytics-header__actions">
          <button 
            onClick={handleHelpClick}
            className="btn btn-link analytics-header__button"
            aria-label="Help and support"
          >
            <Image
              src="/assets/icons/analytics/help-question.svg"
              alt="Help"
              width={44}
              height={44}
            />
          </button>
          <button 
            onClick={handleNotificationClick}
            className="btn btn-link analytics-header__button position-relative"
            aria-label="View notifications"
          >
            <Image
              src="/assets/icons/analytics/notification-bell.svg"
              alt="Notifications"
              width={44}
              height={44}
            />
            <span className="notification-badge">
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>

      {/* Sub-header */}
      <div className="analytics-subheader">
        <h1 className="analytics-subheader__title">
          Analytics
        </h1>
      </div>
    </header>
  );
};

export default AnalyticsHeader;
