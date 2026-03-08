import { useState } from 'react';
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Property {
  id: number;
  image: string;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}

interface FeaturedProperty extends Property {
  description: string;
}

const recentProperties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjkwMjUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "WEST 21ST ST, BLDG-B5",
    address: "3 Madison Ave, NYC",
    price: "$255,000 CAD",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1668174627325-dfbbcba56eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob21lfGVufDF8fHx8MTc3Mjk0NTI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "THE PLATEAU 54, FLOOR-15B, NYC",
    address: "45 Wall St, NYC",
    price: "$750,000 CAD",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcyOTEwNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "14 AVENUE APT, HIGH-ST22, NYC",
    address: "12 Brooklyn Ave, NYC",
    price: "$710,000 CAD",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyOTAxODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "WEST 21 ST, BLDG-A2, NYC",
    address: "78 Park Ave, NYC",
    price: "$325,000 CAD",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1714860534425-7ce04e013dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3MjkxMTMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "EAST 67TH AVE AND 59TH, NYC",
    address: "34 Madison Square, NYC",
    price: "$485,000 CAD",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1850
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1759805583363-87fdee48b581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwb29sJTIwc3Vuc2V0fGVufDF8fHx8MTc3Mjk0NTI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "WEST 21ST ST, BLDG-F5, NYC",
    address: "90 Central Park West, NYC",
    price: "$912,000 CAD",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200
  }
];

const featuredProperties: FeaturedProperty[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1757264119016-7e6b568b810d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzcyOTQ1MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "HIGH BRANCH RD, LYNDEN, WA",
    address: "145 High Branch Rd, Lynden, WA",
    price: "$759,000 CAD",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2945,
    description: "A modern design kitchen blends minimalism, functionality, and aesthetics with clean lines, neutral colors, and quality appliances. It often includes smart storage, ample lighting, and durable materials like quartz and stainless steel. This kitchen balances style and efficiency, creating an inviting space for cooking and socializing."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3Mjk0NTI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "LUXURY ESTATE, BEVERLY HILLS, CA",
    address: "890 Sunset Boulevard, Beverly Hills, CA",
    price: "$2,450,000 CAD",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5200,
    description: "This stunning luxury estate features an open floor plan with panoramic views, state-of-the-art amenities, and exquisite finishes throughout. The property includes a gourmet kitchen, home theater, wine cellar, and expansive outdoor entertainment areas with an infinity pool overlooking the city."
  }
];

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold mb-1 text-gray-800 uppercase">{property.title}</h3>
        <div className="flex items-center gap-1 text-gray-500 mb-3">
          <MapPin className="w-3 h-3" />
          <p className="text-xs">{property.address}</p>
        </div>
        <div className="flex items-center gap-4 mb-3 text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span className="text-sm">{property.sqft} sq ft</span>
          </div>
        </div>
        <p className="text-xl font-bold text-blue-600">{property.price}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('buy');
  const [currentFeatured, setCurrentFeatured] = useState(0);

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredProperties.length);
  };

  const prevFeatured = () => {
    setCurrentFeatured((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  };

  const featured = featuredProperties[currentFeatured];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyOTAxODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-12">
            EVERYTHING<br />REAL ESTATE.
          </h1>
          
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-3 bg-white border-b rounded-none h-12">
                <TabsTrigger value="buy" className="data-[state=active]:bg-gray-100">BUY</TabsTrigger>
                <TabsTrigger value="sell" className="data-[state=active]:bg-gray-100">SELL</TabsTrigger>
                <TabsTrigger value="mortgage" className="data-[state=active]:bg-gray-100">MORTGAGE APPROVED</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="p-6 flex gap-3">
              <Input 
                placeholder="Enter location, property name, or keywords..."
                className="flex-1 h-12 border-gray-300"
              />
              <Button className="bg-black hover:bg-gray-800 text-white h-12 px-8">
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Properties */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">RECENT PROPERTIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">FEATURED PROPERTIES</h2>
          <p className="text-center text-gray-500 mb-12">
            A modern design kitchen blends minimalism, functionality, and aesthetics with clean lines, neutral colors, and quality appliances.
          </p>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img 
                  src={featured.image} 
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{featured.title}</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <p>{featured.address}</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {featured.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Bed className="w-5 h-5 text-blue-500" />
                      <p className="text-sm text-gray-500">BEDROOMS</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{featured.bedrooms}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Bath className="w-5 h-5 text-blue-500" />
                      <p className="text-sm text-gray-500">BATHROOMS</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{featured.bathrooms}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Maximize className="w-5 h-5 text-blue-500" />
                      <p className="text-sm text-gray-500">AREA</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{featured.sqft} sq ft</p>
                  </div>
                </div>
                
                <p className="text-3xl font-bold text-blue-600">{featured.price}</p>
              </div>
            </div>
            
            <button 
              onClick={prevFeatured}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button 
              onClick={nextFeatured}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjkwMjUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Looking to Buy a new property or Sell an existing one?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
              Submit Property
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
              Buy Properties
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
