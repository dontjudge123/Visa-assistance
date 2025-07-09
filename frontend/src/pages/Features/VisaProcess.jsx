import { Link } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';
import PremiumContentBanner from '../../components/PremiumContentBanner';

const VisaProcess = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Visa Process for Students & Job Seekers</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Planning to study or work in Germany but confused about visas? We simplify the journey.
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <p className="text-lg text-gray-700">
          Navigating German visa requirements can seem complex—especially with document checks, appointments, and legal nuances—but it's manageable with clear guidance. Whether you're aiming for a university degree or seeking career opportunities, understanding visa types, documents, and timelines is crucial.
        </p>
      </div>

      {/* Free Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Free Visa Guidance</h2>
        
        {/* Visa Types */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Overview: Visa Types</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🎓 <span className="font-medium">Student Visa:</span> For full-time university enrollment</li>
            <li>💼 <span className="font-medium">Job Seeker Visa:</span> For qualified professionals (valid 6 months)</li>
            <li>⚠️ Tourist visas <span className="font-medium">CANNOT</span> be converted to work/student visas</li>
          </ul>
        </div>

        {/* Core Requirements */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Core Requirements</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700 border-b">Document</th>
                  <th className="px-4 py-3 text-left text-gray-700 border-b">Students</th>
                  <th className="px-4 py-3 text-left text-gray-700 border-b">Job Seekers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b">Passport</td>
                  <td className="px-4 py-3 border-b">Valid + 2 copies</td>
                  <td className="px-4 py-3 border-b">Valid + 2 copies</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">Application Form</td>
                  <td className="px-4 py-3 border-b">Filled online (national-Visa.de)</td>
                  <td className="px-4 py-3 border-b">Filled online</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">Qualifications</td>
                  <td className="px-4 py-3 border-b">University admission letter</td>
                  <td className="px-4 py-3 border-b">Recognized degree/professional cert</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">Finances</td>
                  <td className="px-4 py-3 border-b">€11,208/year blocked account</td>
                  <td className="px-4 py-3 border-b">Proof of funds (€5,000+)*</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-2">*Job seekers: Funds must cover the entire stay</p>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Application Process</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li><span className="font-medium">Book Appointment:</span> At German embassy/consulate in home country</li>
            <li><span className="font-medium">Submit Documents:</span> Originals + 2 sets of copies</li>
            <li><span className="font-medium">Interview:</span> Questions about study/work plans</li>
            <li><span className="font-medium">Processing Time:</span> 4–12 weeks (varies by country)</li>
          </ol>
        </div>

        {/* After Arrival */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. After Arrival in Germany</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>🎓 <span className="font-medium">Students:</span> Convert visa to residence permit within 90 days</li>
            <li>💼 <span className="font-medium">Job Seekers:</span> Apply for work permit once hired</li>
            <li>🏠 Register address at Bürgeramt within 14 days</li>
          </ul>
        </div>

        {/* Key Tips */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h4 className="font-bold text-gray-800 mb-2">Key Tips:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Start applications 3–4 months before planned move</li>
            <li>Translations: All non-German/English docs need certified translations (€30–€80/page)</li>
            <li>Job seekers: Degrees must be recognized by ZAB</li>
          </ul>
        </div>
      </div>

      {/* Premium Content Section */}
      {user ? (
        <div className="bg-blue-50 p-8 rounded-lg shadow-sm border border-blue-100 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-blue-200 pb-2">Premium Visa Services</h2>
          
          {/* Document Review */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">📝 Document Review Service</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Expert verification of your complete application package</li>
              <li>Checklist of missing/incomplete documents</li>
              <li>Formatting guidance for all paperwork</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Request Document Review
            </button>
          </div>

          {/* Interview Preparation */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">💬 Interview Preparation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Mock visa interview with feedback</li>
              <li>Common questions and best answers</li>
              <li>Country-specific advice</li>
            </ul>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                Book Practice Session
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                Download Question Bank
              </button>
            </div>
          </div>

          {/* Blocked Account Assistance */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">🏦 Blocked Account Setup</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Step-by-step guidance for Fintiba/Expatrio</li>
              <li>Comparison of all provider options</li>
              <li>Direct support contact with banks</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                Compare Providers
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                Open Account Now
              </button>
            </div>
          </div>

          {/* Appointment Finder */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">🗓️ Premium Appointment Finder</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Real-time embassy appointment notifications</li>
              <li>Automated slot monitoring</li>
              <li>Priority booking assistance</li>
            </ul>
            <div className="mt-4 bg-white p-4 rounded-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <select className="flex-grow p-3 border border-gray-300 rounded-lg">
                  <option>Select your country</option>
                  <option>India</option>
                  <option>China</option>
                  <option>USA</option>
                </select>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 whitespace-nowrap">
                  Find Appointments
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PremiumContentBanner contentName="premium visa services including document review, interview preparation, and appointment booking assistance" />
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

export default VisaProcess;