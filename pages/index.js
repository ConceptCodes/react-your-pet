import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import ReviewCard from "../components/ReviewCard";
import Vet from "../components/Vet";
import { PlayIcon, MinusIcon, ArrowRightIcon, HeartIcon } from "@heroicons/react/solid";
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

const reviews = [
  {
    title: "intrested and experienced veterinarians",
    author: "helena mervolia",
  },
  {
    title: "both cheap and friendly staff",
    author: "adrian serianlli",
  },
];

const vets = ["niel human pascal", "patric samuel neal", "emnuella belivea"];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>YourPet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="p-10 bg-blue-100">
          <Header />
          <div className="flex justify-between pt-20">
            <div className="space-y-10">
              <div className="text-blue-800 font-bold capitalize">
                <MinusIcon className="inline-block text-blue-800 w-10" />
                veterinary clinic
              </div>
              <div className="text-6xl font-medium">
                Your Family Members
                <br /> are Important to Us
              </div>
              <div className="text-xl text-gray-600">
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
            <div className="text-4xl font-medium mb-14">
              Which services do provide?
            </div>
            <div className="text-gray-500 text-xl">
              We are your service with all our services <br /> and personalities
              you need.
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>
        <section className="bg-blue-100 p-20 flex justify-between">
          <Image
            src="https://via.placeholder.com/500"
            width={500}
            height={500}
          />
          <div className="flex flex-col space-y-4">
            <div className="text-6xl font-medium text-left">
              The Best Veterinarians in <br /> All Branches
            </div>
            <p className="text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore.
            </p>
            <div className="flex">
              <button className="px-8 py-4 capitalize rounded-lg text-white bg-blue-500">
                contact us
              </button>
            </div>
          </div>
        </section>
        <section className="bg-blue-200 p-20 space-y-4 flex flex-col">
          <div className="flex items-center justify-between pb-10">
            <div className="font-medium text-4xl">
              What do our patients say?
            </div>
            <div className="text-gray-500">
              You can see the comments and scores of our patients
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {reviews.map((x, index) => (
              <ReviewCard key={index} review={x} />
            ))}
          </div>
        </section>
        <section className="p-20 bg-blue-200 flex flex-col">
          <div className="flex justify-between pb-10">
            <div className="font-medium capitalize text-4xl">
              Our high qualified veterinarians
            </div>
            <div className="flex space-x-3 items-center capitalize">
              <div className="text-blue-800 font-medium">See all</div>
              <ArrowRightIcon className="text-blue-800 h-5 "></ArrowRightIcon>
            </div>
          </div>
          <div className="flex justify-between">
            {vets.map((x, index) => (
              <Vet key={index} name={x} />
            ))}
          </div>
          <section className="flex flex-col mt-20 p-10 items-center space-y-10 rounded-xl bg-blue-500">
            <div className="text-4xl text-white font-medium">Subscribe to our blog</div>
            <div class="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
              <form class="flex flex-row">
                <input
                  class="h-16 bg-gray-100 text-grey-darker rounded-xl rounded-r-none text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-lg text-gray-600"
                  type="text"
                  placeholder="Enter your email address"
                />
                <span class="flex items-center bg-gray-100 rounded-xl rounded-l-none border-0 px-3 font-bold text-grey-100">
                  <button class="bg-blue-800 hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded">
                    Subscribe
                  </button>
                </span>
              </form>
            </div>
          </section>
          <Footer />
        </section>
          <div className="py-4 bg-blue-200 font-bold flex items-center justify-center">Developed with <HeartIcon className="animate-pulse text-red-600 mx-2 h-5" /> by ConceptCodes </div>
      </main>
    </div>
  );
}
