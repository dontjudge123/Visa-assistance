import { useAuth } from '../context/GlobalContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.firstName}!</h2>
        <p className="text-gray-600">
          You're now logged in to your Anmeldung-Helper account.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;