export default function Page() {
  return (
    <main className="min-h-screen w-full bg-[#0c0c0c] flex items-center justify-center p-4 sm:p-8">
      <section className="w-full max-w-[1200px] aspect-[16/9] bg-[#e8e8e3] p-[5.2%] [container-type:inline-size]">
        <div className="relative h-full w-full overflow-hidden bg-black">
          <img
            src="./2.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent mix-blend-multiply">
            <svg
              className="absolute left-[2.1cqw] top-[2.2cqw] w-[5.6cqw] h-auto text-white"
              viewBox="0 0 66 40"
              fill="currentColor"
            >
              <rect x="0" y="32" width="26" height="8" />
              <rect x="14" y="21" width="26" height="8" />
              <rect x="28" y="10" width="26" height="8" />
              <rect x="40" y="0" width="26" height="8" />
            </svg>

            <div className="absolute left-[2.1cqw] bottom-[2.2cqw] w-[48%] text-white">
              <h1
                className="font-medium leading-[1.18] tracking-[-0.01em] text-[4.2cqw]"
                style={{ fontFamily: "Optima, Candara, 'Gill Sans', 'Segoe UI', sans-serif" }}
              >
                Creating something worth staring at
              </h1>
              <p
                className="mt-[2.2cqw] text-[1.3cqw] leading-[1.4] max-w-[36cqw] font-medium"
                style={{ fontFamily: "Optima, Candara, 'Gill Sans', 'Segoe UI', sans-serif" }}
              >
We build SaaS. Fast, sharp, and without noise.

No endless meetings. No permission chains. If it's good, it ships. If it's not, we kill it and move on.

We back builders who own outcomes, not titles. Ideas compete on merit. Execution wins arguments.

This is where the next products come from.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}