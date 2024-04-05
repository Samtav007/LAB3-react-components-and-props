import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Body from './components/Body';
import Header from './components/header';


function App(props) {
  return (
    <div>
     <Header/>

      <Body Data={props.image}/>
      {/* adding footer component */}
      <GallaryFooter/> 

    </div>
  )
}

export default App;