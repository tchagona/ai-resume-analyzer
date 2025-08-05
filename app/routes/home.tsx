import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
      <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
       <div className={"px-5"}>
           <Navbar/>
       </div>
          <section className="main-section">
              <div className="page-heading py-16">
                  <h1>Track Your Applications & Resume Ratings</h1>
                  <h2>Review your submissions and check AI-powered feedback.</h2>
              </div>
              {resumes.length > 0 &&(

              <div className="resumes-section">
                  {resumes.map((resume, index) => (
                      <ResumeCard resume ={resume} key={resume.id} />
                  ))}
              </div>
              )}

          </section>
      </main>
  )
}
