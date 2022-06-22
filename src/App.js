import './App.css';
import Contact from './components/Contact';
import contacts from './data/contacts.json';
import Header from './components/Header';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App

  return (
    <div className="App" style={{ display: "flex", 'flex-direction': "column" }}>
      <Header />
      {contacts.map((object, index) => {
        return <Contact key={index}
          name={object.name}
          photo={object.photo}
          email={object.email}
          phone={object.phone}>
        </Contact>
      })}
    </div>
  );
}

export default App;
