import { Table } from 'antd';
import React from 'react'


export default function CustomTable() {

    const columns = [
        { title: '№',width: 100,dataIndex: 'number',key: 'number',fixed: 'left' },
        { title: 'Emails',width: 100,dataIndex: 'email',key: 'email',fixed: 'left' },
        { title: 'Date de naissance', dataIndex: 'date', key: 'date' },
        { title: '№ sécu', dataIndex: 'code', key: 'code' },
        { title: 'Statut', dataIndex: 'statut', key: 'statut' },
        { title: 'Actions',key: 'action',fixed: 'right',width: 100,
        
            render: () => <a href="#">Supprimer</a>,
        },
    ];

    const data = [
    {
        key: '1',
        number: '001',
        email: 'example@gmail.com',
        date: "05.04.1990",
        code: '24353',
        statut: "CDD",
    },
    {
        key: '2',
        number: '001',
        email: 'example@gmail.com',
        date: "05.04.1990",
        code: '24353',
        statut: "CDD",
    },
    {
        key: '3',
        number: '001',
        email: 'example@gmail.com',
        date: "05.04.1990",
        code: '24353',
        statut: "CDD",
    },
    {
        key: '4',
        number: '001',
        email: 'example@gmail.com',
        date: "05.04.1990",
        code: '24353',
        statut: "CDD",
    },
    {
        key: '5',
        number: '001',
        email: 'example@gmail.com',
        date: "05.04.1990",
        code: '24353',
        statut: "CDD",
    },
    {
        key: '6',
        number: '001',
        email: 'example@gmail.com',
        date: "05.04.1990",
        code: '24353',
        statut: "CDD",
    },
    {
        key: '7',
        number: '001',
        email: 'example@gmail.com',
        date: "05.04.1990",
        code: '24353',
        statut: "CDD",
    },
    ];

    return <Table size="small" columns={columns} dataSource={data} scroll={{ x: 1000, y: 500 }} />;
}