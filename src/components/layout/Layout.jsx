import {Header} from "./Header.jsx";
import {Content} from "./Content.jsx";
import { Layout as LayoutAntd } from 'antd';
import {SiderWithDnD} from "./siderWithDnD/SiderWithDnD.jsx";

export const Layout=()=>{
    return(
        <LayoutAntd>
            <Header />
            <LayoutAntd>
                <SiderWithDnD/>
                <Content />
            </LayoutAntd>
        </LayoutAntd>
    )
}