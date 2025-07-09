import { Link } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';
import PremiumContentBanner from '../../components/PremiumContentBanner';

const GettingMarried = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Getting Married in Germany</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          You wish to get married in Germany with your love but don't know the bureaucracy? We're here to help.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <p className="text-lg text-gray-700 mb-6">
          Getting married in Germany might feel overwhelming at first — especially with the paperwork, translations, and official steps involved. But the process is very doable once you know what's expected.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're marrying a German citizen or another expat, the key is understanding how the system works. In Germany, only civil marriages are legally recognized, and everything begins at the Standesamt (civil registry office).
        </p>
      </div>

      {/* Free Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Free Guide: Marriage in Germany</h2>
        
        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Overview: Can You Get Married in Germany?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>✅ Legal for residents, tourists, asylum seekers, and undocumented migrants (case-by-case basis)</li>
            <li>🏛️ Only civil ceremonies are legally binding in Germany. Religious weddings are optional.</li>
          </ul>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Basic Requirements</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>📄 Valid passport or national ID</li>
            <li>🏠 Proof of residence (Meldebescheinigung)</li>
            <li>🗂️ Birth certificate (original + certified translation if not in German)</li>
            <li>💍 Certificate of no impediment to marriage (Ehefähigkeitszeugnis)</li>
            <li>📑 If divorced: final divorce decree</li>
            <li>⚰️ If widowed: death certificate of former spouse</li>
          </ul>
        </div>

        {/* Where to Start */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Where to Start</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🏢 Go to your local Standesamt (Registry Office)</li>
            <li>🗓️ Book an appointment online or by phone</li>
            <li>⏳ Start at least 3–6 months in advance</li>
          </ul>
        </div>

        {/* Ceremony */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Civil Wedding Ceremony</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🏛️ Usually held at Standesamt</li>
            <li>👔 Can be simple or formal</li>
            <li>📜 Comes with official marriage certificate (Eheurkunde)</li>
            <li>👥 Witnesses are optional in Germany</li>
          </ul>
        </div>

        {/* Language */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. Language Requirements</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🗣️ Certified interpreter required if either partner doesn't speak German</li>
            <li>🚫 Marriage officer may refuse without clear mutual understanding</li>
          </ul>
        </div>

        {/* Same-Sex */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">6. Same-Sex Marriage</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🏳️‍🌈 Legal since 2017</li>
            <li>👫 Same process as heterosexual couples</li>
          </ul>
        </div>

        {/* Costs */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">7. Estimated Costs</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 border-b">Item</th>
                  <th className="px-4 py-2 text-left text-gray-700 border-b">Cost (Approx.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Civil Ceremony</td>
                  <td className="px-4 py-2 border-b">€60–€100</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Interpreter</td>
                  <td className="px-4 py-2 border-b">€100–€300</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Translations & Apostille</td>
                  <td className="px-4 py-2 border-b">€50–€300</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Eheurkunde Copies</td>
                  <td className="px-4 py-2 border-b">~€10 each</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Wedding Planners - Free Preview */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Wedding Planners</h3>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-600">🌟 Marie Alsleben (Düsseldorf/Cologne/NRW)</h4>
              <p className="text-gray-700 mt-1">
                Full-service planner for international weddings. "Your professionalism goes beyond borders..."
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-600">🌟 Fairytale Weddings by Tamara (Germany & Europe)</h4>
              <p className="text-gray-700 mt-1">
                Destination-style wedding planning with full-service packages.
              </p>
            </div>
          </div>
          {!user && (
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                <Link to="/login" className="text-blue-600 hover:underline">Log in</Link> to see all recommended planners and contact information
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Premium Content Section */}
      {user ? (
        <div className="bg-blue-50 p-8 rounded-lg shadow-sm border border-blue-100 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-blue-200 pb-2">Premium Marriage Services</h2>
          
          {/* Checklist Generator */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">💡</span> Smart Personal Checklist Generator
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Interactive form based on your nationality, marital history, visa status</li>
              <li>Auto-generated checklist with links to local offices</li>
              <li>Document templates specific to your situation</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Generate Your Checklist
            </button>
          </div>

          {/* Legal Concierge */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🧑‍⚖️</span> 1-on-1 Legal Concierge
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Review your personal situation with migration experts</li>
              <li>Get answers to questions like "Can I marry on a tourist visa?"</li>
              <li>30-minute or 60-minute consultation options</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Book Consultation
            </button>
          </div>

          {/* Document Bundle */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📑</span> Document Prep & Translation Bundle
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ready-to-use cover letter templates for Standesamt</li>
              <li>Certified translator booking with price match guarantee</li>
              <li>Step-by-step apostille and notary guidance</li>
            </ul>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                Download Templates
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                Find Translators
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                Apostille Guide
              </button>
            </div>
          </div>

          {/* Fast-Track Booking */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">⚡</span> Fast-Track Booking Assistant
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Find earliest available Standesamt appointments</li>
              <li>Geo-based search across Germany</li>
              <li>Real-time availability notifications</li>
            </ul>
            <div className="mt-4 bg-white p-4 rounded-lg">
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Enter city or postcode" 
                  className="flex-grow p-3 border border-gray-300 rounded-l-lg"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Full Wedding Planners List */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">All Recommended Wedding Planners</h3>
            <div className="space-y-4">
              {[
                {
                  name: "Marie Alsleben (Düsseldorf/Cologne/NRW)",
                  desc: "Full-service planner known for international weddings. Brazilian couple: 'Your professionalism goes beyond borders...'",
                  contact: "mariealsleben.com"
                },
                {
                  name: "Fairytale Weddings by Tamara",
                  desc: "Destination-style planning across Germany & Europe",
                  contact: "fairytale-wedding.de"
                },
                // Add all other planners from your list
              ].map((planner, index) => (
                <div key={index} className="border p-4 rounded-lg bg-white">
                  <h4 className="text-lg font-semibold text-blue-600">{planner.name}</h4>
                  <p className="text-gray-700 mt-1">{planner.desc}</p>
                  <p className="text-gray-500 mt-2">Contact: {planner.contact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <PremiumContentBanner contentName="premium marriage services including checklist generator, legal consultations, and fast-track booking" />
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

export default GettingMarried;