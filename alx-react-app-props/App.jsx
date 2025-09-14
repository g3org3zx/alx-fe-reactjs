import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import UserContext from "./UserContext";

function App() {
  // User data that we want to share across components
  const userData = {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography"
  };

  return (
    // UserContext.Provider wraps all components that need access to userData
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
