"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from "react";
import './global.css';

export default function Home() {
  useEffect(() => {
    // Check if the script is already present
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      };
      document.body.appendChild(script);
    } else if (window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <>
      <Head>
        <title>The Manor Podcast</title>
        <meta name="description" content="The Manor Oxford United Podcast" />
        <meta name="keywords" content="The Manor Podcast, Oxford United, Podcast, Oxford United Podcast, OUFC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/oufc-fav.png" />
      </Head>
      <header className="header">
        <div className="logo">
          <Image
            src="/images/the-manor-new-web.png"
            className="animate__animated animate__fadeIn"
            width={400}
            height={300}
            alt="The Manor Podcast"
          />
        </div>
      </header>
      <main>
        <div className="social1">
          <div className="animate__animated animate__fadeIn">
            <a href="https://open.spotify.com/show/4sHlCqZdGmDPA83giKkNSt" target="_blank" rel="noopener noreferrer">
              <Image src="/images/spotify-icon.png" width={40} height={40} className="icon" alt="Spotify" />
            </a>
            <a href="https://twitter.com/themanorpodcast" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter-icon.png" width={40} height={40} className="icon" alt="Twitter" />
            </a>
            <a href="https://bsky.app/profile/themanorpodcast.bsky.social" target="_blank" rel="noopener noreferrer">
              <Image src="/images/bluesky-black.png" width={40} height={40} className="icon" alt="Bluesky" />
            </a>
            <a href="https://podcasts.apple.com/gb/podcast/tmanor-oxford-united-podcast/id1475037095" target="_blank" rel="noopener noreferrer">
              <Image src="/images/apple-icon.png" width={40} height={40} className="icon" alt="Apple Podcasts" />
            </a>
          </div>
        </div>
        <div className="iframe-container">
          <div className="spotify-player">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/show/4sHlCqZdGmDPA83giKkNSt?utm_source=generator&theme=0"
              width="100%"
              height="300"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            />
            <iframe
              height="450"
              width="100%"
              title="Apple Podcasts Player"
              src="https://embed.podcasts.apple.com/us/podcast/the-manor-oxford-united-podcast/id1475037095?itscg=30200&amp;itsct=podcast_box_player&amp;ls=1&amp;mttnsubad=1475037095&amp;theme=auto"
              id="embedPlayer"
              style={{ border: 0, borderRadius: '12px', width: '100%', maxWidth: '1500px' }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
            />
          </div>
          <div className="twitter-feed">
              <a
                className="twitter-timeline"
                data-width="500"
                data-height="500"
                data-theme="dark"
                href="https://twitter.com/themanorpodcast?ref_src=twsrc%5Etfw"
              >
                Tweets by themanorpodcast
              </a>
          </div>
        </div>
      </main>
      <footer>
        <div className="social2">
          <a href="https://open.spotify.com/show/4sHlCqZdGmDPA83giKkNSt" target="_blank" rel="noopener noreferrer">
            <Image src="/images/spotify-icon-yellow.png" width={40} height={40} className="icon" alt="Spotify" />
          </a>
          <a href="https://twitter.com/themanorpodcast" target="_blank" rel="noopener noreferrer">
            <Image src="/images/twitter-icon-yellow.png" width={40} height={40} className="icon" alt="Twitter" />
          </a>
          <a href="https://bsky.app/profile/themanorpodcast.bsky.social" target="_blank" rel="noopener noreferrer">
            <Image src="/images/bluesky-yellow.png" width={40} height={40} className="icon" alt="Bluesky" />
          </a>
          <a href="https://podcasts.apple.com/gb/podcast/tmanor-oxford-united-podcast/id1475037095" target="_blank" rel="noopener noreferrer">
            <Image src="/images/apple-icon-yellow.png" width={40} height={40} className="icon" alt="Apple Podcasts" />
          </a>
        </div>
        <div className="profile-follow">
          <a href="https://twitter.com/JamSebRob?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-count="false">Follow @JamSebRob</a>
          <a href="https://twitter.com/Johnhud7?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-count="false">Follow @Johnhud7</a>
          <a href="https://twitter.com/Connor_Penfold?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-count="false">Follow @Connor_Penfold</a>
          <a href="https://twitter.com/CaptainOx?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large" data-show-count="false">Follow @CaptainOx</a>
        </div>
      </footer>
    </>
  );
}