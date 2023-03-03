import React, { memo } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { User, TableData } from './utils';

type Props = {
  tableList?: Array<TableData>;
  userList?: Array<User>;
};

const TableList: React.FC<Props> = memo(({ tableList, userList }: Props) => {
  const columns: ColumnsType<TableData> = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'personId',
      key: 'personId',
      render(personId) {
        const value = userList?.find((i) => i.id === personId)?.name;
        return <span>{value}</span>;
      },
    },
  ];
  return (
    <div>
      <Table dataSource={tableList} columns={columns} rowKey="id"></Table>
    </div>
  );
});
TableList.defaultProps = {
  tableList: [],
  userList: [],
};
export default TableList;
