"use client";

import GithubIcon from "@/icons/github.svg";
import LinkedInIcon from "@/icons/linkedIn.svg";
import TwitterIcon from "@/icons/twitter.svg";
import MailIcon from "@/icons/mail.svg";
import DocumentIcon from "@/icons/document.svg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data";

export default function Side() {
  return (
    <div className="bg-gray-50 h-full p-4 xl:p-8 flex flex-col items-center justify-between gap-8">
      <div></div>
      <div className="w-full">
        <section className="text-center mb-6">
          <div className="w-32 h-32 mb-6 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-3xl font-bold">UH</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">Usman Haroon O I</h3>
          <p className="text-md text-gray-500 mb-2">Software Developer</p>
          <p className="text-sm text-gray-400 mb-4">📍 Tamilnadu, India</p>
        </section>

        <section className="mb-6 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="bg-white border rounded-md border-input text-gray-600 hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              {skill}
            </Badge>
          ))}
        </section>
      </div>

      <section className="w-full flex justify-center flex-col md:flex-row lg:flex-col xl:flex-row gap-4 items-center">
        <Button
          onClick={() =>
            (window.location.href = "mailto:haroonusman00@gmail.com")
          }
        >
          <MailIcon className="mr-2" /> Contact Me
        </Button>
        <Button variant="outline" onClick={() => window.print()}>
          <DocumentIcon className="mr-2" /> Print Resume
        </Button>
      </section>

      <section className="w-full">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/haroonwaves"
            className="text-gray-400 hover:text-black transition-colors duration-300"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/haroonwaves"
            className="text-gray-400 hover:text-black transition-colors duration-300"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/UsmanHaroon98"
            className="text-gray-400 hover:text-black transition-colors duration-300"
          >
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
      </section>

      <footer className="hidden lg:block text-center text-sm text-gray-500">
        © 2024 Usman Haroon. All rights reserved.
      </footer>
    </div>
  );
}
