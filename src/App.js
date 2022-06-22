import './App.css';
import Contact from './components/Contact';
import contacts from './data/contacts.json';
import Header from './components/Header';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App

  return (
    <div className="App" style={{ display: "flex", 'flexDirection': "column" }}>
      <Header />
      {contacts.map((contact) => {
        return <Contact data={contact}>
        </Contact>
      })}
    </div>
  );
}

export default App;
