import './App.css';
import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import ExploreComponent from "./components/tuiter/ExploreScreen/ExploreComponent";
import HomeScreen from "./components/tuiter/HomeScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs />} />
                        <Route path="labs" exact={true} element={<Labs />} />
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index element={<HomeScreen/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                            {/*<Route path="notifications" element={<NotificationScreen/>}/>*/}
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;

