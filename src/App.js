import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar/>
            <ItemDetailContainer/>
            <ItemListContainer greeting = {"Welcome"}></ItemListContainer>
        </>
    );
}

export default App;