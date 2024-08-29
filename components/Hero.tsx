import Image from 'next/image';

function Hero() {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0 transform duration-500 cursor-pointer hover:-translate-y-1">
        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="hero"
          layout="responsive"
          width={1040}
          height={100}
          priority
        />
        {/* Text Content */}
        <div className="content border bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
          <h2 className="text-3xl font-semibold ">
            Your City, Your Network
          </h2>
          <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
            LocalLoop is your go-to platform for staying informed, connecting
            with neighbors, and engaging with local events and services.
            Discover everything your city has to offer, all in one place.
          </p>
          <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
            Discover More
          </button>
        </div>
      </section>
    </section>
  );
}

export default Hero;
