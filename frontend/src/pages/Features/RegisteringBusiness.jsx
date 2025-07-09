import { Link } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';
import PremiumContentBanner from '../../components/PremiumContentBanner';

const RegisteringBusiness = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">How to Register a Business in Germany</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A complete expat guide to launching your business legally and successfully
        </p>
      </div>

      {/* Free Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Basic Business Setup Guide</h2>
        
        {/* Eligibility */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who Can Register a Business?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🇪🇺 EU/EEA/Swiss citizens (same rights as Germans)</li>
            <li>🌍 Non-EU citizens with §21 Aufenthaltserlaubnis (residence permit)</li>
            <li>🎓 Students/asylum seekers (with restrictions)</li>
          </ul>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              <span className="font-semibold">How to Check:</span> Look for "Erwerbstätigkeit gestattet" on your residence permit
            </p>
          </div>
        </div>

        {/* Business Types */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Business Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Freelancer */}
            <div className="border p-5 rounded-lg bg-gray-50">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Freelancer (Freiberufler)</h4>
              <p className="text-gray-700 mb-3">For "liberal professions":</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Designers, writers, artists</li>
                <li>Consultants, psychologists</li>
                <li>IT specialists (varies by city)</li>
                <li>Doctors, engineers, architects</li>
              </ul>
              <p className="mt-3 text-green-600 font-medium">No trade license needed • Simpler taxes</p>
            </div>
            
            {/* Gewerbe */}
            <div className="border p-5 rounded-lg bg-gray-50">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Trader (Gewerbe)</h4>
              <p className="text-gray-700 mb-3">For commercial activities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>E-commerce, online stores</li>
                <li>Cafés, restaurants, gyms</li>
                <li>Real estate, cleaning companies</li>
                <li>Tradespeople, hair salons</li>
              </ul>
              <p className="mt-3 text-blue-600 font-medium">Requires Gewerbeanmeldung • More regulations</p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Required Documents</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🛂 Valid passport/ID</li>
            <li>🏠 Meldebescheinigung (proof of address)</li>
            <li>📝 Residence permit (non-EU)</li>
            <li>📄 Business activity description</li>
            <li>🎓 Professional qualifications (if applicable)</li>
            <li>📋 City-specific application forms</li>
          </ul>
        </div>

        {/* Registration Steps */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Registration Process</h3>
          
          {/* Freelancer Steps */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-800 mb-2">For Freelancers:</h4>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Fill out Fragebogen zur steuerlichen Erfassung</li>
              <li>Submit to local Finanzamt (Tax Office)</li>
              <li>Receive Steuernummer in 2-6 weeks</li>
              <li>Start invoicing legally</li>
            </ol>
            <p className="mt-2 text-sm text-gray-500">
              Berlin: Submit via email/post • Other cities: Use ELSTER online
            </p>
          </div>
          
          {/* Gewerbe Steps */}
          <div>
            <h4 className="text-xl font-medium text-gray-800 mb-2">For Gewerbe:</h4>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Visit local Gewerbeamt (Trade Office)</li>
              <li>Complete Gewerbeanmeldung form</li>
              <li>Pay €20-€50 registration fee</li>
              <li>Receive Gewerbeschein (Trade License)</li>
            </ol>
          </div>
        </div>

        {/* After Registration */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">After Registration</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>📊 You'll receive your Steuernummer (Tax Number)</li>
            <li>🏛️ Automatic notification to:
              <ul className="list-disc pl-6 mt-1">
                <li>Finanzamt (tax office)</li>
                <li>IHK/HWK (industry chamber)</li>
                <li>Trade supervisory authority</li>
              </ul>
            </li>
            <li>ℹ️ Membership in IHK or HWK is mandatory</li>
          </ul>
        </div>

        {/* Costs Table */}
        <div className="mb-8 overflow-x-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Costs & Taxes</h3>
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left border">Item</th>
                <th className="px-4 py-3 text-left border">Cost (Approx.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Freelance Registration</td>
                <td className="px-4 py-2 border">Free</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Gewerbeanmeldung</td>
                <td className="px-4 py-2 border">€20–€50</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Tax Consultant</td>
                <td className="px-4 py-2 border">€300–€1,500/year</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">VAT Returns</td>
                <td className="px-4 py-2 border">19% (if applicable)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">IHK Fees</td>
                <td className="px-4 py-2 border">€70–€300/year</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bank & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Bank & Insurance */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bank Account & Insurance</h3>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Recommended Banks:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>N26 Business (freelancers)</li>
              <li>Kontist (auto tax features)</li>
              <li>Holvi, Qonto, Deutsche Bank</li>
            </ul>
            
            <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Insurance:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Public liability (Haftpflicht)</li>
              <li>Professional indemnity</li>
              <li>Health insurance (mandatory)</li>
              <li>Accident insurance (some trades)</li>
            </ul>
          </div>
          
          {/* Digital Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Digital Tools</h3>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Invoicing:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Debitoor</li>
              <li>Lexoffice</li>
              <li>SevDesk</li>
            </ul>
            
            <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">Tax Filing:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>ELSTER</li>
              <li>Sorted</li>
              <li>Taxfix</li>
            </ul>
          </div>
        </div>

        {/* When to Get Help */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">When You Need Professional Help</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Your profession is regulated (healthcare, finance)</li>
            <li>You need to hire employees</li>
            <li>Unclear about visa implications</li>
            <li>German language barriers</li>
          </ul>
        </div>
      </div>

      {/* Premium Content Section */}
      {user ? (
        <div className="bg-blue-50 p-8 rounded-lg shadow-sm border border-blue-100 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-blue-200 pb-2">Premium Business Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Eligibility Check */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Residency + Business Eligibility Check</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                <li>Verify if your visa allows self-employment</li>
                <li>Recommend best business structure</li>
                <li>Identify potential legal hurdles</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Check Eligibility
              </button>
            </div>
            
            {/* Registration Concierge */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Registration Concierge</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                <li>We complete and submit your forms</li>
                <li>Gewerbeanmeldung handling</li>
                <li>Tax ID application</li>
                <li>ELSTER account setup</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start Registration
              </button>
            </div>
            
            {/* Document Bundle */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Document Bundle</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                <li>Pre-filled form samples (EN/DE)</li>
                <li>Business plan template</li>
                <li>Invoice formats</li>
                <li>Tax declaration samples</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Download All
                </button>
                <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50">
                  View Samples
                </button>
              </div>
            </div>
            
            {/* Bank + Insurance */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Bank + Insurance Setup</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                <li>Expat-friendly bank recommendations</li>
                <li>Health insurance guidance</li>
                <li>Freelancer liability options</li>
                <li>Tax software setup</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>

          {/* Consulting */}
          <div className="mt-8 bg-white p-5 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">One-on-One Consulting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">With Certified Advisors:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Tax specialists</li>
                  <li>Legal consultants</li>
                  <li>Available in English/German</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Popular Topics:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>"Changing from freelance to GmbH"</li>
                  <li>"Legal tax reduction strategies"</li>
                  <li>"Best city for my business type"</li>
                </ul>
              </div>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Book Consultation
            </button>
          </div>

          {/* Resource Hub */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Business Resource Hub</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Tax Deadlines Calendar",
                "Industry-Specific Guides",
                "City Startup Manuals",
                "Branding Kit",
                "VAT Filing Assistant",
                "Legal Entity Comparison"
              ].map((resource, index) => (
                <div key={index} className="border p-4 rounded-lg bg-white hover:shadow-md transition-shadow">
                  <p className="font-medium text-gray-800">{resource}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <PremiumContentBanner contentName="premium business registration services including eligibility checks, document preparation, and expert consultations" />
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

export default RegisteringBusiness;