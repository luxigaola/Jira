import React, { useState, useCallback } from 'react';
import SearchPanel from './SearchPanel';
import TableList from './TableList';
import { TableData, User, Param } from './utils';
import { clearObject, useMount } from 'utils/utils';
import qs from 'qs';
type Props = {};

const SearchList: React.FC<Props> = (props: Props) => {
  const [userList, SetUserList] = useState<Array<User>>([]);
  const [tableList, SetTableList] = useState<Array<TableData>>([]);
  useMount(() => {
    const baseUrl = process.env.REACT_APP_API_URL;
    fetch(baseUrl + 'user').then(async (response) => {
      if (response.ok) {
        SetUserList(await response.json());
      }
    });
  });
  // useEffect(()=>{
  //   const baseUrl = process.env.REACT_APP_API_URL
  //   fetch(baseUrl+'user').then(async response=>{
  //     if(response.ok){
  //       SetUserList(await response.json())
  //     }
  //   })
  // },[])
  const valueChange = useCallback((param: Param) => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const newParam = clearObject<Param>(param);
    fetch(baseUrl + 'project?' + qs.stringify(newParam)).then(
      async (response) => {
        if (response.ok) {
          SetTableList((await response.json()) as Array<TableData>);
        }
      }
    );
  }, []);
  return (
    <div>
      <SearchPanel userList={userList} valueChange={valueChange}></SearchPanel>
      <TableList userList={userList} tableList={tableList}></TableList>
    </div>
  );
};

export default SearchList;
