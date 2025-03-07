import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrendingSection = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Dolore magna aliqua",
      description: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat..."
    },
    {
      image: "https://images.unsplash.com/photo-1515871204537-49a5fe66a31f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Morbi eleifend a libero",
      description: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat..."
    },
    {
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      title: "Morbi eleifend a libero",
      description: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat..."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">TRENDING</h2>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-rose-500">
                {article.title}
              </h3>
              <p className="mt-2 text-gray-600">{article.description}</p>
              <span className="mt-4 inline-block text-sm text-gray-500">2hr ago</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;