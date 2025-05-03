import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="p-4 bg-[#F3F3F3] flex max-w-7xl mx-auto mt-3">
      <button className="bg-primary text-white  px-5 py-3">Latest</button>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Marquee>
    </div>
  );
};

export default Latest;
