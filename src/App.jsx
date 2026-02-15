import Nav from "./Components/Nav";
import Mainroutes from "./Components/Mainroutes";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-slate-900 to-gray-950 text-white">
      
      {/* Navbar */}
      <Nav />

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Mainroutes />
      </main>

    </div>
  );
};

export default App;
