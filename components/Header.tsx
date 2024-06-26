import Link from "next/link";
import Image from "next/image";
import ScrollArrow from "./ScrollArrow";

export function Header(): JSX.Element {
  return (
    <section className="relative text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] h-[98vh]">
      <div className="absolute inset-0">
        <Image
          src="/arrowhead_cover.jpg"
          alt="Golf Course"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="relative z-10">
          <header className="px-4 lg:px-6 h-14 flex items-center w-full z-10">
            <Link
              href="#"
              className="flex items-center justify-center"
              prefetch={false}
            >
              <Image
                src="/tc_logo.png"
                width={20}
                height={20}
                alt="TC"
                className="h-8 w-auto"
              />
              <span className="sr-only">TC Colorado Classic</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Event Details
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Charity Info
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Sponsorship
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
                prefetch={false}
              >
                Register
              </Link>
            </nav>
          </header>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              TC Colorado Classic
            </h1>
            <p className="text-lg sm:text-xl md:text-4xl">
              Arrowhead Golf Club
            </p>
            <p className="text-sm sm:text-xl md:text-xl">June 10th 2025</p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium transition-all duration-200 border border-white bg-white/10 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
      <ScrollArrow />
    </section>
  );
}
