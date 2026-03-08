import { useState } from 'react';
import { Bed, Bath, Maximize, MapPin, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
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
  type: string;
  status: string;
}

const allProperties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjkwMjUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "WEST 21ST ST, BLDG-B5",
    address: "3 Madison Ave, NYC",
    price: "$255,000 CAD",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: "House",
    status: "For Sale"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1668174627325-dfbbcba56eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob21lfGVufDF8fHx8MTc3Mjk0NTI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "THE PLATEAU 54, FLOOR-15B, NYC",
    address: "45 Wall St, NYC",
    price: "$750,000 CAD",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    type: "Apartment",
    status: "For Sale"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcyOTEwNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "14 AVENUE APT, HIGH-ST22, NYC",
    address: "12 Brooklyn Ave, NYC",
    price: "$710,000 CAD",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    type: "Condo",
    status: "For Rent"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyOTAxODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "WEST 21 ST, BLDG-A2, NYC",
    address: "78 Park Ave, NYC",
    price: "$325,000 CAD",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: "Apartment",
    status: "For Sale"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1714860534425-7ce04e013dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3MjkxMTMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "EAST 67TH AVE AND 59TH, NYC",
    address: "34 Madison Square, NYC",
    price: "$485,000 CAD",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1850,
    type: "House",
    status: "For Sale"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1759805583363-87fdee48b581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwb29sJTIwc3Vuc2V0fGVufDF8fHx8MTc3Mjk0NTI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "WEST 21ST ST, BLDG-F5, NYC",
    address: "90 Central Park West, NYC",
    price: "$912,000 CAD",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    type: "Villa",
    status: "For Rent"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1757264119016-7e6b568b810d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzcyOTQ1MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "HIGH BRANCH RD, LYNDEN, WA",
    address: "145 High Branch Rd, Lynden, WA",
    price: "$759,000 CAD",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2945,
    type: "House",
    status: "For Sale"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3Mjk0NTI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "LUXURY ESTATE, BEVERLY HILLS, CA",
    address: "890 Sunset Boulevard, Beverly Hills, CA",
    price: "$2,450,000 CAD",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5200,
    type: "Estate",
    status: "For Sale"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjkwMjUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "RIVERSIDE TOWER, APT-302",
    address: "567 River Road, NYC",
    price: "$550,000 CAD",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1900,
    type: "Condo",
    status: "For Rent"
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
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            property.status === 'For Sale' 
              ? 'bg-blue-500 text-white' 
              : 'bg-green-500 text-white'
          }`}>
            {property.status}
          </span>
        </div>
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

export default function Properties() {
  const [propertyType, setPropertyType] = useState<string>("all");
  const [propertyStatus, setPropertyStatus] = useState<string>("all");

  const filteredProperties = allProperties.filter(property => {
    const typeMatch = propertyType === "all" || property.type === propertyType;
    const statusMatch = propertyStatus === "all" || property.status === propertyStatus;
    return typeMatch && statusMatch;
  });

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjkwMjUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">PROPERTIES</h1>
          <p className="text-xl text-white/90">Find Your Dream Home</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-6 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm mb-2 text-gray-700">Search Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Enter location, property name..." 
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="w-full md:w-48">
              <label className="block text-sm mb-2 text-gray-700">Property Type</label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Condo">Condo</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Estate">Estate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-48">
              <label className="block text-sm mb-2 text-gray-700">Status</label>
              <Select value={propertyStatus} onValueChange={setPropertyStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                  <SelectItem value="For Rent">For Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
              SEARCH
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Properties Available
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No properties found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
