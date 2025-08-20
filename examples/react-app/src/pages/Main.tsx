import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button, Dropdown } from 'antd'
import { useRef } from 'react'

type GithubIssueItem = {
  url: string
  id: number
  number: number
  title: string
  labels: {
    name: string
    color: string
  }[]
  state: string
  comments: number
  created_at: string
  updated_at: string
  closed_at?: string
}

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48
  },
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: '李',
        value: '李'
      },
      {
        text: '建',
        value: '建'
      },
      {
        text: 'lv youyou',
        value: 'lv youyou'
      }
    ],
    filterMode: 'tree',
    filterSearch: (value, item: any) => item.title.includes(value),
    onFilter: (value, record: any) => record.name.includes(value),
    width: '30%'
  }
]
const dataSource = [
  { index: '12', name: '李建彬43' },
  { index: '13', name: '马珊珊444' },
  { index: '134', name: '啥活动955' }
]

export default () => {
  const actionRef = useRef<ActionType>()
  return (
    <ProTable<GithubIssueItem>
      dataSource={dataSource as any as GithubIssueItem[]}
      columns={columns}
      actionRef={actionRef}
      cardBordered
      editable={{
        type: 'multiple'
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value)
        }
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto'
      }}
      options={{
        setting: {
          listsHeight: 400
        }
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime]
            }
          }
          return values
        }
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page)
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: '1st item',
                key: '1'
              },
              {
                label: '2nd item',
                key: '1'
              },
              {
                label: '3rd item',
                key: '1'
              }
            ]
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>
      ]}
    />
  )
}
