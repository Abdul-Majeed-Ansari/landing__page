const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-white text-sm font-medium uppercase tracking-wider">WORLD NEWS</span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Amazing places in America to visit.
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.
            </p>
            <button className="mt-8 px-6 py-3 bg-rose-500 text-white font-medium rounded-lg hover:bg-rose-600 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;