import React from "react";
import { techStackDetails } from "../Details";
import Rating from "../Components/stars";

function Technologies() {
  const programmingLanguage = techStackDetails?.programming;
  const webTech = techStackDetails?.webTech
  const databases = techStackDetails?.database;
  const tools = techStackDetails?.tools
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Programming Languages
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          {
            programmingLanguage.map((ele,index) => 
              <div key={index} className="flex flex-col items-center h-full">
                <div className="flex flex-1">
                  <img src={ele.name} title="html" alt="" className="max-w-20" />
                </div>
              
              <Rating rating={ele.rating} />
              </div>
            )
          }
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Web Technologies & Frameworks
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          {
            webTech.map((ele,index) => 
              <div key={index} className="flex flex-col items-center h-full">
                <div className="flex flex-1">
                  <img src={ele.name} title="html" alt=""  className="max-w-20"/>
                </div>
              
              <Rating rating={ele.rating} />
              </div>
            )
          }
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
      {
            tools.map((ele,index) => 
              <div key={index} className="flex flex-col items-center h-full">
                <div className="flex flex-1">
                  <img src={ele.name} title="html" alt="" className="max-w-20" />
                </div>
              
              <Rating rating={ele.rating} />
              </div>
            )
          }
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Databses
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
          {
            databases.map((ele,index) => 
              <div key={index} className="flex flex-col items-center h-full">
                <div className="flex flex-1">
                  <img src={ele.name} title="html" alt="" className="max-w-20" />
                </div>
              
              <Rating rating={ele.rating} />
              </div>
            )
          }
      </section>

    </main>
  );
}

export default Technologies;
