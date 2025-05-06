export default function InsightsSection () {
    const scrollToTop = () => {
        let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
        let scrollInterval = setInterval(() => {
          if (window.scrollY === 0) {
            clearInterval(scrollInterval);
          } else {
            window.scrollBy(0, scrollStep);
          }
        }, 18); // Adjust the interval time for smoothness
      };
    return (
        <section className="bg-white py-16 px-6 md:px-20 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12">Systematic Disparity Insights</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
            
            <div className="max-w-sm">
                <h3 className="text-3xl font-bold mb-4">36%</h3>
                <p>
                By the end of the Trump administration, the average asylum office grant rate had fallen to 28% from an average of 44% in fiscal year 2020.
                </p>
            </div>

            <div className="max-w-sm">
                <h3 className="text-3xl font-bold mb-4">5%</h3>
                <p>
                The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
                </p>
            </div>

            <div className="max-w-sm">
                <h3 className="text-3xl font-bold mb-4">6x Lower</h3>
                <p>
                Between fiscal year 2017 and 2020, the New York asylum office’s average grant rate was 6 times lower than the San Francisco asylum office.
                </p>
            </div>

            </div>
            <div className="flex flex-col py-14 items-center gap-4">
                <a href="https://www.humanrightsfirst.org" className="bg-[#5a5e3d] text-white font-semibold py-2 px-6 rounded">Read More</a>
                <button onClick={scrollToTop} className="text-sm py-10 text-gray-700 hover:text-gray-900">Back To Top ↑</button>
            </div>
        </section>
    )
}