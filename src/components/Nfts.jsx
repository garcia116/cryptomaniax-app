import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Input } from 'antd'

import { useGetNftsQuery } from '../services/nftsApi'
import Loader from './Loader'

const Nfts = () => {

    const { data } = useGetNftsQuery();
    const [nfts, setNfts] = useState();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setNfts(data);
        console.log(nfts)
       
        const filteredData = data?.filter(item => item.collection_name.toLowerCase().includes(searchTerm));
        
        console.log(filteredData)
        setNfts(filteredData);
    }, [data, searchTerm]);
    
    if (!data) return <Loader />;

    return (
        <>
            <div className="search-crypto">
                <Input
                    placeholder="Search NFT in Top Collections this month" 
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {nfts?.map((nft, i) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={i}
                    >
                        <Card
                            hoverable
                            title={`${i+1}. ${nft.collection_name}`}     
                        >
                            <p>Volume: {nft.volume}</p>
                            <p>Trades: {nft.trades}</p>
                            <p>Floor: {nft.floor}</p>
                            <p>Website: <a href={nft.collection_url} target="_blank" rel="noreferrer"> URL</a></p>         
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Nfts;
