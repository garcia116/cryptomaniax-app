import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetNftsQuery } from '../services/nftsApi'
import Loader from './Loader'

const Nfts = () => {

    const { data } = useGetNftsQuery();
   
    if (!data) return <Loader />;

    return (
        <>
            <div className="search-crypto">
                <Input
                    placeholder="Search NFT in Top Collections this month" 
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div>
            <Row gutter={[32, 32]} className="nfts-card-container">
                {data.map((nfts, i) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={i}
                    >
                        <Card
                            hoverable
                            title={`${i+1}. ${nfts.collection_name}`}
                            
                        >
                            <p>Volume: {nfts.volume}</p>
                            <p>Trades: {nfts.trades}</p>
                            <p>Floor: {nfts.floor}</p>
                            <p>Website: <a href={nfts.collection_url} target="_blank" rel="noreferrer"> URL</a></p>
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Nfts;
