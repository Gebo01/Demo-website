function ServiceBox({ Title, Text, Icon, bg }) {
  return (
    <div
      className="
      w-full sm:w-[280px]
      shrink-0
      bg-white shadow-md rounded-xl
      p-5 sm:p-6
      text-center
      hover:shadow-xl transition-shadow duration-300
      border-t-4 border-red-500
    "
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div
          className={`${bg} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center`}
        >
          <img src={Icon} alt={Title} className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-gray-800">{Title}</h2>

      <div className="w-10 sm:w-12 h-1 bg-red-500 mx-auto my-3 rounded-2xl"></div>

      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{Text}</p>
    </div>
  );
}

export default ServiceBox;
