import './App.css';
import Card from './Card/Card';
import svg from './img/img'


const cardsBody = {
  title: 'Card title',
  text: `Some quick example text to build on the card title and make up the bulk of the card's content.`

}
 
function App() {
  return (
    <div className="App container">
      <Card cardsBody={cardsBody}>{svg}</Card>
      <Card cardsBody={cardsBody}></Card>
    </div>
  );
}

export default App;
