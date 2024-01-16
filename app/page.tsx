export default function Home() {
  return (
    <main className="flex min-h-[100dvh] min-w-[100dvw] flex-col items-center justify-center">
      <div>
        <div className="flex h-[512px] w-[736px] rounded-[32px] bg-neutral-white">
          <div className="w-[368px] rounded-[32px] bg-gradient-light-slate-blue">
            <h2>Your Result</h2>
            <div>
              <p>76</p>
              <p>of 100</p>
            </div>
            <div>
              <p>Great</p>
              <p>
                You scored higher than 65% of the people who have taken this
                test
              </p>
            </div>
          </div>
          <div className="flex-grow">
            <h2>Summary</h2>
            <ul>
              <li>
                <p>icon</p>
                <h4>Reaction</h4>
                <p>80</p>/100
              </li>
              <li>
                <p>icon</p>
                <h4>Memory</h4>
                <p>92</p>/100
              </li>
              <li>
                <p>icon</p>
                <h4>Verbal</h4>
                <p>61</p>/100
              </li>
              <li>
                <p>icon</p>
                <h4>Visual</h4>
                <p>72</p>/100
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-transparent">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </main>
  );
}
