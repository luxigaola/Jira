import React, { useEffect, useState, memo } from 'react';
import { Select, Input } from 'antd';
import { User, Param } from './utils';
import { useDebounce } from 'utils/utils';
type Props = {
  userList?: Array<User>;
  valueChange: Function;
};

const SearchPanel: React.FC<Props> = memo(
  ({ userList, valueChange }: Props) => {
    const [param, setParam] = useState<Param>({
      name: '',
      personId: undefined,
    });
    const handleChange = (personId: number) => {
      setParam({
        ...param,
        personId,
      });
    };
    const debounceParam = useDebounce<Param>(param, 2000);
    useEffect(() => {
      valueChange(debounceParam);
    }, [debounceParam, valueChange]);

    return (
      <div style={{ padding: 12 }}>
        <Input
          value={param.name}
          style={{ width: 120, marginRight: 12 }}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        ></Input>
        <Select
          style={{ width: 120 }}
          onChange={handleChange}
          options={userList}
          fieldNames={{ label: 'name', value: 'id' }}
        ></Select>
      </div>
    );
  }
);
SearchPanel.defaultProps = {
  userList: [],
  valueChange: () => {},
};
export default SearchPanel;
