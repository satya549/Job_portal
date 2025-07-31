import LatestJobCards from "./LatestJobCards";

const randomjobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        { randomjobs.slice(0,6).map((item) => (
          <LatestJobCards key={item} jobId={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
