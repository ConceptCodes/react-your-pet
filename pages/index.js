import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";


const services = [
  {
    title: "the radiology assistant",
  },
  {
    title: "ambulance service",
  },
  {
    title: "dental care service",
  },
  {
    title: "surgical operation",
  },
  {
    title: "parturition service",
  },
  {
    title: "pet hostel service",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Your Pet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="p-10 bg-blue-100">
          <Header />
          <div className="flex justify-between pt-20">
            <div>
              <div className="text-blue-800 font-medium mb-5 capitalize">
                veterinary clinic
              </div>
              <div className="text-6xl mb-10">
                Your Family Members
                <br /> are Important to Us
              </div>
              <div className="mb-10 text-xl text-gray-600">
                We are on duty 24 hours a day for the health of your family
                members
              </div>
              <div className="flex">
                <button className="px-6 my-2 capitalize rounded-lg text-white bg-blue-500">
                  get started
                </button>
                <div className="flex mx-5 h-14 justify-center items-center w-14 bg-white rounded-full">
                  <PlayIcon className="text-blue-500 h-10" />
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://via.placeholder.com/500"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <section className="p-20 bg-blue-200">
          <div className="flex justify-between py-5">
            <div className="text-4xl">Which services do we?</div>
            <div className="text-gray-500 text-xl">
              We are your service with all our services <br/> and personalities you
              need.
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {
              services.map((service, index) => <ServiceCard key={index} service={service} />)
            }
          </div>
        </section>
        {/* cta */}
        {/* reviews */}
        {/* veterinarians */}
        {/* blog cta */}
      </main>
      <Footer />
    </div>
  );
}
