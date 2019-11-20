import Header from "../components/Header";

export default function Index() {
  return (
    <>
      <Header />
      <h1>Welcome to the Electronic Ledger!</h1>
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
    </>
  );
}