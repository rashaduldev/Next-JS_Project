import Counter from "@/components/Counter/Counter";
import Link from "next/link";


const HomePage = () => {
  // throw new Error();
  return (
    <div>
      This is homepage
      <Counter></Counter>
     <div className="m-5 flex gap-5">
     <Link href={'/about'}>
      <button className="btn btn-active btn-secondary">About</button>
      </Link>
      <Link href={'/news'}>
      <button className="btn btn-active btn-accent">News</button>
      </Link>
     </div>
    </div>
  );
};

export default HomePage;