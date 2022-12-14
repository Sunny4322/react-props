import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from './Component/Navbar'
import NotFound from './Component/NotFound'

function App(){
	return(
          <div>
			<BrowserRouter>
			<Navbar/>
			<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/about' element={<About/>}/>
			<Route path='contact' element={<Contact/>}/>
			<Route path='*'	element={<NotFound/>}/>
			</Routes>
			</BrowserRouter>
			{/* <StateExample/> */}
          {/* <h1>This is about props example</h1>
          <PropsExample Name="ReactJS" year="2013"/>                  
          <PropsExample Name="AngularJS" year="2008"/>
          <PropsExample Name="VueJS" year="2017"/> */}
		  	 {/* <FuncPropExample framework="react" number="1" /> */}
          </div>  
	
		)
}

export default App
/*import ClassComponent from './ClassComponent'
import ClassComponent2 from './ClassComponent2'
function App(){
	return(
		<div>
			<p> hello welcome</p>
				<h1>keep smile</h1>
				<ClassComponent/>
				<img src="https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg"/>
				<ClassComponent2/>
				<img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"/>
			</div>
		)
}
export default App*/

// import PropsExample from './PropsExample'
// import FuncPropExample from './FuncPropExample'

//import StateExample from "./StateExample"
//import Events from "./Events"