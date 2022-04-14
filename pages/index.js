import Aos from "aos";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import {
  AboutCourse,
  Home,
  Offers,
  WhyChooseUs,
  Courses,
  Cetagories,
  AchivementsCount,
  Instructors,
  JoinUs,
  StudentsReviews,
  Blogs,
  Supporters,
} from "../components/Sections";

export default function Index() {
  useEffect(() => {
    Aos.init({ delay: 100 });
  }, []);

  return (
    <>
      <div className=" w-full bg-emerald-800 overflow-hidden">
        <Layout>
          <Header />
          <Home />
        </Layout>
      </div>

      <div className=" w-full bg-gray-100 ">
        <Layout>
          <Offers />
        </Layout>
      </div>

      <div className=" w-full bg-white ">
        <Layout>
          <AboutCourse />
        </Layout>
      </div>

      <div className=" w-full bg-gray-100 ">
        <Layout>
          <Cetagories />
        </Layout>
      </div>

      <div className=" w-full bg-white ">
        <Layout>
          <Courses />
        </Layout>
      </div>

      <div className=" w-full bg-white ">
        <Layout>
          <WhyChooseUs />
        </Layout>
      </div>

      <div className=" w-full bg-gray-100 ">
        <Layout>
          <AchivementsCount />
        </Layout>
      </div>

      <div className=" w-full bg-white ">
        <Layout>
          <Instructors />
        </Layout>
      </div>

      <div className=" w-full bg-white ">
        <Layout>
          <JoinUs />
        </Layout>
      </div>

      <div className=" w-full bg-gray-100 ">
        <Layout>
          <StudentsReviews />
        </Layout>
      </div>

      <div className=" w-full bg-white ">
        <Layout>
          <Blogs />
        </Layout>
      </div>

      <div className=" w-full bg-white ">
        <Layout>
          <Supporters />
        </Layout>
      </div>
      
      
      <div className=" w-full bg-emerald-800 ">
        <Layout>
          <Footer />
        </Layout>
      </div>

      <div className="h-14 border-t-[.7px] border-white bg-emerald-800 flex justify-end px-2 items-center">
        <p className="text-right text-sm text-white">All Copyright reserved 2022</p>
      </div>
    </>
  );
}
