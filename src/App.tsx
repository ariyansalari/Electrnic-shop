import { Layout } from "./layout/index";
import { Route,Routes } from "../node_modules/react-router-dom/dist/index";
import { HomeScrenn } from "./screens/Home";
import { routes } from "./routes";
export const App = () => {
    return ( 
        <Layout>
            <Routes>
        {routes.map((i)=> <Route key={i.path} path={i.path} element={i.element}/> )}
            </Routes>
        </Layout>
     );
}
 