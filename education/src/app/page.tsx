export default function Home() {
  return (
    <div className="p-4">
      {/* Heading with responsive font size and padding */}
      <h1 className="text-2xl font-bold underline font-primary sm:text-3xl md:text-4xl lg:text-5xl p-4 sm:p-6 md:p-8">
        This is Poppins (Primary Font)
      </h1>

      {/* Paragraph with responsive font size and margin */}
      <p className="text-lg font-secondary sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 md:mt-8">
        This is Nunito Sans (Secondary Font)
      </p>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="bg-blue-500 p-4 rounded-lg text-white">
          Box 1
        </div>
        <div className="bg-green-500 p-4 rounded-lg text-white">
          Box 2
        </div>
        <div className="bg-purple-500 p-4 rounded-lg text-white">
          Box 3
        </div>
      </div>
    </div>
  );
}