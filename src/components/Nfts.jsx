import React, { useEffect, useState } from 'react'
import { Input, Table } from 'antd'

import { useGetNftsQuery } from '../services/nftsApi'
import Loader from './Loader'



const Nfts = ({ simplified }) => {

    const { data } = useGetNftsQuery();
    const [nfts, setNfts] = useState();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setNfts(data);
       
        const filteredData = data?.filter(item => item.collection_name.toLowerCase().includes(searchTerm));
        
        setNfts(filteredData);
    }, [data, searchTerm]);

    const columns =[
        {
            title:'Rank',
            dataIndex:'rank',
            key:'rank',
            width: '.5%',
            render: (item, index) => (data.indexOf(index) + 1)
    
        } ,
        {
            title:'Name',
            dataIndex:'collection_name',
            key:'collection_name'
    
        } ,
        {
            title:'Volume',
            dataIndex:'volume',
            key:'volume'
    
        },
        {
            title:'Trades',
            dataIndex:'trades',
            key:'trades'
    
        },
        {
            title:'Floor',
            dataIndex:'floor',
            key:'floor'
    
        },
        {
            title:'Website',
            dataIndex:'collection_url',
            key:'collection_url',
            render: (text, record) => <a href={record.collection_url}>{text}</a>
    
        }
    ]
    
    if (!data) return <Loader />;

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                <Input
                    placeholder="Search NFT in Top Collections this month" 
                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
            </div>
            )}
            
            <Table
                columns={columns}
                dataSource={nfts}
                scroll={{x: 100}}
            >
        
            </Table>
        </>
    )
}

export default Nfts;
