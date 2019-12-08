import Header from "../components/Header";
import ReadWidth from "../components/ReadWidth";
import Hero from "../components/Hero";
import { theme } from "../static/constants";
import Link from "next/link";

const SalesPitch = props => (
  <>
    <hr />
    <h1 style={{ fontWeight: 200, color: theme.main }}>{props.title}</h1>
    {props.children}
  </>
);

export default function Index() {
  return (
    <>
      <Header />
      <Hero>Electronic Ledger</Hero>
      <ReadWidth>
        <p>
          Welcome to the Electronic Ledger! It's still currently in development,
          and probably will be for a while, but we're glad you could made it! If
          you want anything, feel free to ask, or wait for the features to come
          around. If you wouldn't like to wait, you may be able to find something
          like this online. If you know of something like this online, I'd like to
          know; I'm making this because I don't know if it's anywhere else.
        </p>
        <p>
          Below are some of my notes for this app, eventually. I don't know why I
          care so much to make a logged-out experience.
        </p>
        <blockquote>
          <p>Things I want from this page:</p>
          <ul>
            <li>Basic information. (Why not?)</li>
            <li>A login link.</li>
            <li>General Information.</li>
          </ul>
          <p>Things that I want from other pages:</p>
          <ul>
            <li>Some sort of semi-secure login system. ("/login?to=...")</li>
            <li>The app itself. (Why not "/app"?)</li>
            <li>API in "/api"?</li>
          </ul>
          <p>Things I probably need:</p>
          <ul>
            <li>A header banner that's customizable</li>
            <li>Buttons</li>
            <li>Tables</li>
          </ul>
        </blockquote>
        <p>This page may eventually get a lot of sales pitches. Maybe like:</p>
        <SalesPitch title="100% Secure">
          You don't have to worry about loosing things, because we don't store
          anything for you to loose! We won't hold any information you try to
          give us. That's why we're seen as the #1…[sales pitch]…[pitch]…[ad]…
          </SalesPitch>
        <SalesPitch title="Open Source">
          From the beginning, this project was made to be open source!
          </SalesPitch>
        <SalesPitch title="GMO Free">
          We won't let even a single speck of GMO get on this page.
          </SalesPitch>
        <SalesPitch title="Long frontpage">
          The front page so far has a lot of long-winded content that wasn't
          very carefully thought out.
          </SalesPitch>
        <hr />
        <p>
          It's like this page was made specifically for testing how the
          layout works when there's a scroll bar. However, for that to be the
          case, there would have to be a <a href="http://example.com/">link</a> or
          two, and a bunch of other things that need testing.
        </p>
        <p>
          How very interesting?
        </p>
      </ReadWidth>
    </>
  );
}