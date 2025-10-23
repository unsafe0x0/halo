import React from "react";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full pt-16 lg:pt-40 px-5 border-t border-border"
      style={{
        backgroundImage: `url('/mask.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto text-sm bg-primary py-5 px-5 rounded-t-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <Image
                src="/halo.svg"
                alt=""
                width={40}
                height={40}
                className="dark:invert"
                draggable="false"
              />
              <h2 className="text-2xl font-semibold text-secondary">Halo</h2>
            </div>
            <p className="text-muted">
              The simplest way to turn ideas into working projects.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-secondary">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="hover:underline text-secondary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:underline text-secondary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#docs" className="hover:underline text-secondary">
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-secondary">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:underline text-secondary">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="hover:underline text-secondary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:underline text-secondary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-secondary">
              Stay connected
            </h4>
            <div className="flex items-center gap-3 mb-2">
              <Link
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center text-xl text-secondary hover:text-accent p-2 rounded-md hover:bg-card transition-colors"
              >
                <FaSquareXTwitter aria-hidden />
              </Link>
              <Link
                href="#"
                aria-label="Discord"
                className="flex items-center justify-center text-xl text-secondary hover:text-accent p-2 rounded-md hover:bg-card transition-colors"
              >
                <FaDiscord aria-hidden />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center text-xl text-secondary hover:text-accent p-2 rounded-md hover:bg-card transition-colors"
              >
                <FaLinkedin aria-hidden />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="flex items-center justify-center text-xl text-secondary hover:text-accent p-2 rounded-md hover:bg-card transition-colors"
              >
                <GrGithub aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <div className="my-2 h-[1px] w-full bg-muted"></div>
        <p className="text-xs text-muted mt-5 text-center">
          © {new Date().getFullYear()} Halo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
