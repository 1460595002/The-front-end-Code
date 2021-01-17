import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
export default class UserList extends Component {
 

data = [
  {
    key: '1',
    firstName: '张三',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: '李四',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: '王五',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
    render() {
        return (
            <div>
               <Table dataSource={this.data}>
      <Column title="姓名" dataIndex="firstName" key="firstName" />
    <Column title="年龄" dataIndex="age" key="age" />
    <Column title="地址" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>修改 {record.lastName}</a>
          <a>删除</a>
        </Space>
      )}
    />
  </Table>
            </div>
        )
    }
}
