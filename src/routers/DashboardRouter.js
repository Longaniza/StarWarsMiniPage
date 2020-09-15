import React from 'react'
import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import { Navbar } from '../Components/ui/NavBar'
import { BlackpinkScreen } from '../Components/blackpink/BlackpinkScreen'
import { IdolScreen } from '../Components/idols/IdolScreen'
import { IdolSearch } from '../Components/idols/IdolSearch'
import { NewHopeScreen } from '../Components/movieScreens/NewHopeScreen'
import { EmpireStrikesScreen } from '../Components/movieScreens/EmpireStrikesScreen'
import { ReturnJediScreen } from '../Components/movieScreens/ReturnJediScreen'
import { PlanetScreen } from '../Components/movieScreens/PlanetScreen'
//import { MovieScreen } from '../Components/movieScreens/MovieScreen'
export const DashboardRouter = ({history}) => {
    const lastpath = localStorage.getItem('lastpath');
    return (
        
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path='/blackpink' component={BlackpinkScreen}/>
                    <Route exact path='/movie1' component={NewHopeScreen}/>
                    <Route exact path='/movie2' component={EmpireStrikesScreen}/>
                    <Route exact path='/movie3' component={ReturnJediScreen}/>

                    <Route exact path="/idol/:idolId" component={IdolScreen}/>
                    <Route exact path="/planet/:planetName" component={PlanetScreen}/>
                    <Route exact path="/search" component={IdolSearch}/>
                    <Redirect to={lastpath}/>
                </Switch>
            </div>   
        </>
    )
}
