import { Table, Tag } from 'antd';
import React from 'react'

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        legislative_matter: 'Government is planning to sign the MCC agreement, are you satisfied of that ?',
        date: '2019-09-12 - 2019-09-24 ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
        target_audiance: ['Technitions', 'Developers'],
    },
    {
        key: '2',
        legislative_matter: 'Do you think that abortion is good to legalize in Sir Lanka ? ',
        date: '2019-06-12 - 2019-07-24',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
        target_audiance: ['Doctors', 'Farmers'],
    },
    {
        key: '3',
        legislative_matter: 'Do you think that abortion is good to legalize in Sir Lanka ?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
        date: ' 2019-07-12 - 2019-09-24',
        target_audiance: ['Nurses', 'Teachers'],
    },
];
class AvailablePolls extends React.Component {
    render() {
        return (
            <div style={{display:'flex',alignItems:'center', justifyContent:'center',margin:'0 24 0 24', marginTop:'15%'}}>
                <Table dataSource={data}>

                    <Column title="Legislative Matter" dataIndex="legislative_matter" key="legislative_matter" />

                    <Column title="Description" dataIndex="description" key="description" />
                    <Column title="Date" dataIndex="date" key="date" />
                    <Column
                        title="Target Auditions"
                        dataIndex="target_audiance"
                        key="target_audiance"
                        render={target_audiance => (
                            <span>
                                {target_audiance.map(tag => (
                                    <Tag color="blue" key={tag}>
                                        {tag}
                                    </Tag>
                                ))}
                            </span>
                        )}
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a style={{ marginRight: 16 }}>Edit </a>
                                <a>Close</a>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    };
}

export default AvailablePolls;