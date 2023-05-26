import TrendingMovie from "./TrendingMovie";
import TvMovie from "./TvMovie";
import CartPerson from "./CartPerson";

export default function Home() {
  return (
    <>
      <div className="row g-3">
        <TrendingMovie />
        <TvMovie />
        <CartPerson />
      </div>
    </>
  );
}
