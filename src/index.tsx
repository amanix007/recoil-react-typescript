import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Canvas from './Canvas'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from "recoil";
import { Atoms } from './atoms'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot >
            <ChakraProvider>
                <Router>
                    <Switch>
                        <Route path={"/examples/atoms"}>
                            {/* <Canvas /> */}
                            <Atoms />
                        </Route>
                    </Switch>
                </Router>
            </ChakraProvider>
        </RecoilRoot >,
    </React.StrictMode>,
    document.getElementById('root'),
)
