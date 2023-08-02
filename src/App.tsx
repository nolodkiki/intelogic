import './App.scss'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Map from './components/Map';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { getGeometry } from './Redux/slices/counterSlice';
import { getData } from './Redux/slices/dataSlice';

function App() {
  const dispatch = useAppDispatch()
  const test = [[30.29496392, 59.84660399], [30.42423701, 59.82934196], [30.38064206, 59.83567701]]
  const state = useAppSelector(state => state.data)

  const arr = []
  const testFunc = (obj) => {

  }

  useEffect(() => {
    dispatch(getData())
    dispatch(getGeometry(test))
  }, [dispatch])

  interface DataType {
    key: React.Key;
    name: string;
    point1: number[] | string
    point2: number[]
    point3: number[]
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Маршрут',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Точка №1 (lat, lng)',
      dataIndex: 'point1',
    },
    {
      title: 'Точка №2 (lat, lng)',
      dataIndex: 'point2',
    },
    {
      title: 'Точка №3 (lat, lng)',
      dataIndex: 'point3',
    },
  ];


  const data: DataType[] = [
    {
      key: '1',
      name: 'Маршрут №1',
      point1: [59.84660399, 30.29496392],
      point2: [59.82934196, 30.42423701],
      point3: [59.83567701, 30.38064206],
    },
    {
      key: '2',
      name: 'Маршрут №2',
      point1: [59.84660399, 30.29496392],
      point2: [59.82934196, 30.42423701],
      point3: [59.82934196, 30.42423701],
    },
    {
      key: '3',
      name: 'Маршрут №3',
      point1: [59.84660399, 30.29496392],
      point2: [59.82934196, 30.42423701],
      point3: [59.82934196, 30.42423701],
    }
  ];


  return (
    <div>
      <Table
        rowSelection={{
          type: 'radio',
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Map />
    </div>
  )
}

export default App
