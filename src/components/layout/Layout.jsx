import {Header} from "./Header.jsx";
import {Sider} from "./Sider.jsx";
import {Content} from "./Content.jsx";
import { Layout as LayoutAntd } from 'antd';

export const Layout=()=>{
    return(
        <LayoutAntd>
            <Header />
            <LayoutAntd>
                <Sider/>
                <Content />
            </LayoutAntd>
        </LayoutAntd>
    )
}