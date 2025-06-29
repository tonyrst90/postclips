import { AppStore } from "@/Components/(postclips)/landing/AppStore";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ showDownloadApp = true }) {
    return (
        <footer className="bg-black text-white py-16">
            {/* Logo Section */}
            <div className="container mx-auto px-4 mb-5 d-flex justify-content-center">
                <Image
                    src="/assets/images/(postclips)/logos/logo.svg"
                    alt="PostClips Logo"
                    width={180}
                    height={48}
                />
            </div>

            {/* App Store Buttons */}
            {(showDownloadApp) && (
                <div className="container d-flex justify-content-center gap-3">
                    <AppStore />
                </div>
            )}

            {/* Legal Links */}
            <div className="container mx-auto px-4 mt-4">
                <div className="flex justify-center gap-8 md:gap-16 text-center postclips-links">
                    <Link href="/terms" target="_blank" className="text-white cursor-pointer">
                        Terms of use
                    </Link>
                    <Link href="/privacy" target="_blank" className="text-white cursor-pointer">
                        Privacy Policy
                    </Link>
                    <Link href="/disclosures" target="_blank" className="text-white cursor-pointer">
                        Disclosures
                    </Link>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="container mx-auto px-4 mb-5 mt-5">
                <div className="flex justify-center gap-6 socials-container">
                    <Link href="https://x.com/PostClips2" target="_blank" aria-label="Twitter/X">
                        <Image
                            src="/assets/images/(postclips)/landing/twitter.svg"
                            alt="Twitter/X"
                            width={28}
                            height={28}
                        />
                    </Link>
                    <Link href="https://www.tiktok.com/@postclips" target="_blank" aria-label="TikTok">
                        <Image
                            src="/assets/images/(postclips)/landing/tiktok.svg"
                            alt="TikTok"
                            width={28}
                            height={28}
                        />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCv28tg0BfgzAVvGWFAfkO9A" target="_blank" aria-label="YouTube">
                        <Image
                            src="/assets/images/(postclips)/landing/youtube.svg"
                            alt="YouTube"
                            width={28}
                            height={28}
                        />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61573178450005" target="_blank" aria-label="Facebook">
                        <Image
                            src="/assets/images/(postclips)/landing/facebook.svg"
                            alt="Facebook"
                            width={28}
                            height={28}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/postclips" target="_blank" aria-label="Instagram">
                        <Image
                            src="/assets/images/(postclips)/landing/instagram.svg"
                            alt="Instagram"
                            width={28}
                            height={28}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}