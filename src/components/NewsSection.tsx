import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">HAPPENING NOW</h2>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="group cursor-pointer">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-medium">
                  CITY
                </span>
                <img 
                  src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Golden Gate Bridge"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-rose-500">
                Large article title
              </h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.
              </p>
              <span className="mt-4 inline-block text-sm text-gray-500">2hr ago</span>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-medium">
                  TRAVEL
                </span>
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                  alt="Forest path"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-rose-500">
                Large article title
              </h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.
              </p>
              <span className="mt-4 inline-block text-sm text-gray-500">2hr ago</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Desert"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-rose-500">
                Small title
              </h3>
              <span className="mt-2 inline-block text-sm text-gray-500">3h ago by Michael</span>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Mountain"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-rose-500">
                Small title
              </h3>
              <span className="mt-2 inline-block text-sm text-gray-500">4h ago by Michael</span>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1682686580950-960d1d513532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Road"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-rose-500">
                Small title
              </h3>
              <span className="mt-2 inline-block text-sm text-gray-500">5h ago by Michael</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;