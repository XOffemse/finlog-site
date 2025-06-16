import bgImage from '../../assets/images/header/default-head-bg.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden pt-16 -mt-8"
    >
      {/* Background image */}
      <img
        src={bgImage}
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full w-full px-6 sm:px-12 md:px-24 py-16 text-center md:text-left">
        <div className="text-white max-w-2xl">
<h2
  className="mb-6 font-bold"
  style={{
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 'clamp(1.875rem, 4vw, 3rem)',
    lineHeight: 1.2,
  }}
>
  Why Choose FinLog?
</h2>
<p
  className="mb-10 leading-relaxed max-w-xl mx-auto md:mx-0"
  style={{
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    lineHeight: 1.6,
  }}
>
  FinLog offers intuitive budgeting, real-time financial insights, and complete control over your money — all secured with advanced encryption to keep your data safe.
</p>

          <button
            className="
              uppercase tracking-wide text-white
              bg-transparent
              border-2 border-white
              rounded-full
              py-3 px-12
              hover:bg-white/10
              hover:shadow-[0_0_12px_#ffffff80]
              transition duration-300 ease-in-out
              font-semibold
              inline-block mx-auto md:mx-0
              -mt-4
            "
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(0.875rem, 2vw, 1rem)', // 14px min to 16px max
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
