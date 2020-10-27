import { Layout } from 'antd';

import logo from './logo.svg';

import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
		<Layout className="site">
			<Sider className="sider">
				<img src={logo} alt=""/>
			</Sider>
			
			<Layout>
				<Header className="header">Ant Design Learning</Header>

				<Content className="main">Content</Content>
				
				<Footer>&copy; Bargamut 2020</Footer>
			</Layout>
		</Layout>
  );
}

export default App;
