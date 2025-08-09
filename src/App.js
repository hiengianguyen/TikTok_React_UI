import { DefaultLayout } from './layouts';
import { publicRoutes } from './router';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react/jsx-runtime';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((routes, index) => {
                        let Layout = DefaultLayout;
                        if (routes.layout) {
                            Layout = routes.layout;
                        } else if (routes.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = routes.component;
                        return (
                            <Route
                                key={index}
                                path={routes.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
