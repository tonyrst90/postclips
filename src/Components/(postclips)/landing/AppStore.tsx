import Image from "next/image";

export const AppStore = () => {
  return (
    <div className="app-store-buttons">
      <a
        href="https://apps.apple.com/mx/app/post-clips/id6742848231?l=en-GB"
        target="_blank"
        className="app-store-btn app-store-ios"
      >
        <Image
          src="/assets/images/(postclips)/landing/appstore.svg"
          alt="App Store"
          width={180}
          height={60}
        />
      </a>
      <a
        href="https://apps.apple.com/mx/app/post-clips/id6742848231?l=en-GB"
        target="_blank"
        className="app-store-btn app-store-android"
      >
        <Image
          src="/assets/images/(postclips)/landing/googleplay.svg"
          alt="Google Play"
          width={180}
          height={60}
        />
      </a>
    </div>
  )
}