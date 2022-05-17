import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails, NFTs }  from './components'
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout className="app-layout">
                    <div className="routes">
                        <Routes>
                            <Route path="/cryptomaniax-app" element={<Homepage />}/>              
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />}/>                           
                            <Route path="/crypto/:coinId" element={<CryptoDetails />}/>
                            <Route path="/nfts" element={<NFTs />}/>                         
                            <Route path="/news" element={<News />}/>            
                        </Routes>
                    </div>
                </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    CryptoManiax <br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/cryptomaniax-app">Home</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
            </div>
        </div>
    );
}

export default App
