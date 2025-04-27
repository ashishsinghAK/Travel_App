import './App.css';
import { Routes, Route } from 'react-router-dom';
import Onboarding from './Pages/Onboarding';
import StatusBar from './Component/StatusBar';
import MainDashboard from './Pages/MainDashboard';

function App() {
  return (
    <div className="bg-slate-900 flex justify-center items-center min-h-screen">
      <div className="App max-w-[393px] w-screen  text-white flex flex-col overflow-x-hidden">
        <StatusBar />
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/Dashboard" element={<MainDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
