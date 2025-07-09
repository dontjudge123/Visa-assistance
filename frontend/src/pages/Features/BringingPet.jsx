import { Link } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';
import PremiumContentBanner from '../../components/PremiumContentBanner';

const BringingPet = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Bringing a Pet to Germany</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A complete guide for expats bringing dogs, cats, or ferrets to Germany
        </p>
      </div>

      {/* Eligibility */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Who Can Bring a Pet?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>An expat with a work or student visa</li>
          <li>A long-term resident or citizen</li>
          <li>A refugee (in some cases)</li>
          <li>A tourist (for short stays only)</li>
        </ul>
        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800">
            <span className="font-semibold">Note:</span> Only dogs, cats, and ferrets are considered domestic pets under EU law.
          </p>
        </div>
      </div>

      {/* Preparation */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Preparing Your Pet for Travel</h2>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Microchipping</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Must use ISO 11784/11785-compliant chip</li>
            <li>If non-standard chip exists: bring scanner or implant second ISO chip</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Rabies Vaccination</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Administered after microchipping</li>
            <li>At least 21 days before travel</li>
            <li>Valid 1-3 years depending on vaccine</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Required Paperwork</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-gray-800">From EU Country:</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>EU Pet Passport (with rabies info and chip number)</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium text-gray-800">From Non-EU Countries (USA, UK, etc.):</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>EU Health Certificate (issued within 10 days of travel)</li>
                <li>Proof of rabies vaccination</li>
                <li>Optional tapeworm treatment for dogs</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-medium text-gray-800">From High-Risk Countries (India, Pakistan, etc.):</h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>All above requirements plus</li>
                <li>Rabies titer test from approved lab</li>
                <li>Test must be 30+ days after vaccination and 3+ months before travel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Travel & Housing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Travel */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Traveling with Your Pet</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Airline Guidelines</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>In-cabin: Small pets (~under 8kg)</li>
            <li>Cargo: Larger dogs in pressurized hold</li>
            <li>IATA-approved carrier required</li>
            <li>Pet-friendly airlines: Lufthansa, KLM</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">At German Customs</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Declare your pet upon arrival</li>
            <li>Present all documents</li>
            <li>Incomplete documents may result in:
              <ul className="list-disc pl-5 mt-1">
                <li>Denied entry</li>
                <li>Quarantine at your cost</li>
                <li>Return to origin country</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Housing */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pet-Friendly Housing</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Renting with Pets</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Landlords can set pet policies</li>
            <li>Cats/rabbits usually allowed</li>
            <li>Dogs often need approval</li>
            <li>Service animals must be accepted</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Finding Rentals</h3>
          <p className="text-gray-700 mb-2">Search for "Haustiere erlaubt" on:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Immobilienscout24.de</li>
            <li>WG-Gesucht.de</li>
            <li>Kleinanzeigen.de</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Pet Résumé Tips</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Vaccination records</li>
            <li>Breed and behavior info</li>
            <li>Neutered/spayed status</li>
            <li>Cute photo!</li>
          </ul>
        </div>
      </div>

      {/* Registration & Care */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Registration */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pet Registration</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Dogs</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Register with local Ordnungsamt</li>
            <li>Receive dog tag (Hundemarke)</li>
            <li>Pay dog tax: €60–€150/year</li>
            <li>Liability insurance required in most states</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Cats/Ferrets</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>No registration required</li>
            <li>Microchip and insurance optional</li>
          </ul>
        </div>

        {/* Vet Care */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Vet Care & Vaccinations</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Finding a Vet</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Use vetfinder.de or Tasso.net</li>
            <li>Many urban vets speak English</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Vaccination Schedule</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left border">Pet</th>
                  <th className="px-4 py-2 text-left border">Vaccine</th>
                  <th className="px-4 py-2 text-left border">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Dog</td>
                  <td className="px-4 py-2 border">Rabies</td>
                  <td className="px-4 py-2 border">Every 1-3 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Dog</td>
                  <td className="px-4 py-2 border">Distemper, Parvo</td>
                  <td className="px-4 py-2 border">Annual/triannual</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Cat</td>
                  <td className="px-4 py-2 border">Rabies</td>
                  <td className="px-4 py-2 border">Every 1-3 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Boarding & Breed Laws */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Boarding */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pet Boarding & Daycare</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Pet Hostels/Kennels</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Dogs: €15–€40/day</li>
            <li>Cats: €10–€25/day</li>
            <li>May offer training, play areas, spa</li>
            <li>Require vaccination proof</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Dog Daycare</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Available in major cities</li>
            <li>€15–€30/day</li>
            <li>May require temperament test</li>
            <li>Find on hundehotel.info, Pets24.de</li>
          </ul>
        </div>

        {/* Breed Laws */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Breed-Specific Laws</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Restricted/Banned Breeds</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Pitbull Terrier</li>
            <li>Staffordshire Bullterrier</li>
            <li>American Bulldog</li>
            <li>Bullmastiff (varies by state)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Requirements</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Some states ban these breeds</li>
            <li>Others require:
              <ul className="list-disc pl-5 mt-1">
                <li>Temperament test</li>
                <li>Muzzle/leash in public</li>
                <li>Higher insurance/tax</li>
              </ul>
            </li>
            <li>Check your state's laws before entry</li>
          </ul>
        </div>
      </div>

      {/* Premium Services */}
      {user ? (
        <div className="bg-blue-50 p-8 rounded-lg shadow-sm border border-blue-100 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-blue-200 pb-2">Premium Pet Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Checklist */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Pet Travel Checklist</h3>
              <p className="text-gray-700 mb-4">Custom checklist based on your pet's origin and type</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Generate Checklist
              </button>
            </div>
            
            {/* Vet Booking */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Vet Appointment Booking</h3>
              <p className="text-gray-700 mb-4">Find and book English-speaking vets</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Find Vets Near You
              </button>
            </div>
            
            {/* Relocation */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pet Relocation Concierge</h3>
              <p className="text-gray-700 mb-4">Full-service relocation assistance</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Packages
              </button>
            </div>
            
            {/* Lost Pet */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lost Pet Support</h3>
              <p className="text-gray-700 mb-4">Register with TASSO/Findefix</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Register Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <PremiumContentBanner contentName="premium pet relocation services including checklists, vet booking, and relocation assistance" />
      )}

      {/* Back Link */}
      <div className="text-center mt-8">
        <Link to="/" className="text-blue-600 hover:underline inline-flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BringingPet;