import { Table, Button, Spin, Input } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd/es/input';
import type { ColumnType } from 'antd/es/table';

export default function MyTable() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<DataType[]>([]);
  const [searchText, setSearchText] = React.useState<string>('');
  const [searchedColumn, setSearchedColumn] = React.useState<keyof DataType | ''>('');
  const searchInput = React.useRef<InputRef>(null);

  type DataType = {
    key: string;
    patient_number: string;
    name: string;
    age: number;
  };

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData([
        { key: '1', patient_number: '55688', name: '王小明', age: 32 },
        { key: '2', patient_number: '77889', name: '李大仁', age: 40 },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const handleSearch = (
    selectedKeys: React.Key[],
    confirm: () => void,
    dataIndex: keyof DataType,
  ) => {
    confirm();
    setSearchText(selectedKeys[0] as string);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters?: () => void) => {
    if (clearFilters) clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: keyof DataType): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`搜尋 ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
        >
          搜尋
        </Button>
        <Button
          size="small"
          style={{ width: 90 }}
          onClick={() => handleReset(clearFilters)}
        >
          清除
        </Button>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ?.toString()
        .toLowerCase()
        .includes(String(value).toLowerCase()),
  });

  const columns: ColumnType<DataType>[] = [
    {
      title: '病歷號',
      dataIndex: 'patient_number',
      key: 'patient_number',
      ...getColumnSearchProps('patient_number'),
    },
    {
      title: '病人姓名',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: '年齡',
      dataIndex: 'age',
      key: 'age',
      ...getColumnSearchProps('age'),
    },
    {
      title: '帶出表單',
      key: 'select',
      render: () => (
        <Button type="primary" >
          帶出表單
        </Button>
      ),
    },
        {
      title: '刪除',
      key: 'delete',
      render: () => (
        <Button type="primary" danger>
          刪除
        </Button>
      ),
    },
  ];

  return (
    <div className="p-4">
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <Spin tip="載入中..." size="large" />
        </div>
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </div>
  );
}
import type { DropdownProps } from 'antd/es/dropdown';