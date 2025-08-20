import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Breadcrumb, Typography, Table } from 'antd'
import moment from 'moment'
import { PageContainer } from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { compose, withUrlQuery, withRouter } from '@kfe/eva'
import oplogModule from 'modules/oplog'
import PrettierCode from './components/PrettierCode'
const transformTableQuery = (params) => {
  const query = { ...params }
  const { current, pageSize } = params

  Object.keys(query).forEach((v) => {
    if (query[v] === '' || query[v] === '-1') query[v] = undefined
  })

  current &&
    delete Object.assign(query, {
      offset: current === 1 ? 0 : (current - 1) * pageSize
    })['current']

  pageSize && delete Object.assign(query, { limit: pageSize })['pageSize']

  if (query['time'] && query['time'].length === 2) {
    query['start_time'] = query['time'][0].unix()
    query['end_time'] = query['time'][1].unix()
  }
  delete query['time']

  return query
}
const { Paragraph, Title, Text } = Typography
const List = (props) => {
  const { oplog, isLoadingOplog, getOplog, query = {} } = props
  const columns = [
    {
      title: '应用',
      dataIndex: 'app_name',
      initialValue: 'education'
    },
    {
      title: '操作时间',
      dataIndex: 'operated_at_range',
      valueType: 'dateTimeRange',
      initialValue: [moment().subtract(1, 'day'), moment()],
      search: {
        transform: (value) => {
          console.log('value', value)
          return {
          start_at: value[0]?.format('YYYY-MM-DD HH:mm:ss'),
          end_at: value[1]?.format('YYYY-MM-DD HH:mm:ss')
        }}
      },
      hideInTable: true
    },
    {
      title: '操作人',
      dataIndex: 'operator_id'
    },
    {
      title: '场景',
      dataIndex: 'scene'
    },
    {
      title: '描述',
      dataIndex: 'description',
      ellipsis: true
    },
    {
      title: '资源 ID',
      dataIndex: 'object_id'
    },
    {
      title: '操作人 IP',
      dataIndex: 'operator_ip'
    },
    {
      title: '操作时间',
      dataIndex: 'operated_at',
      hideInSearch: true
    },
    {
      title: '请求 URL',
      dataIndex: 'request_url',
      hideInTable: true
    },
    {
      title: '请求方法',
      dataIndex: 'request_method',
      hideInTable: true
    },
    {
      title: '关键字',
      dataIndex: 'keywords',
      fieldProps: () => ({ placeholder: '李华,张三,王五' }),
      hideInTable: true
    }
  ]
  const tableRequest = async (params) => {
    const { data: { items = [], pagination } = {} } = await getOplog(
      transformTableQuery(params)
    )
    return {
      data: items,
      success: true,
      total: pagination?.total
    }
  }
  const expandedRowRender = (record) => {
    return (
      <Card title="请求详情" type="inner" bordered={false} size="small">
        <Row>
          <Col span={16}>
            <Title level={5}>Request Info</Title>
            <Text code>{record.request_method}</Text>
            <Text copyable>{record.request_url}</Text>
            <Title level={5}>Request Body</Title>
            <PrettierCode
              title="Request Body"
              stringifyData={record.request_body}
            />
          </Col>
          <Col span={8}>
            <Title level={5}>Response</Title>
            <Paragraph copyable ellipsis={{ rows: 3, expandable: true }}>
              {record.response_body}
            </Paragraph>
          </Col>
        </Row>
      </Card>
    )
  }

  return (
    <PageContainer
      header={{
        title: ''
      }}
      breadcrumbRender={() => (
        <Breadcrumb>
          <Breadcrumb.Item>操作日志</Breadcrumb.Item>
        </Breadcrumb>
      )}
    >
      <Card bodyStyle={{ padding: '0px 20px' }}>
        <ProTable
          columns={columns}
          form={{
            syncToUrl: true,
            initialValues: query
          }}
          loading={isLoadingOplog}
          rowKey="id"
          dataSource={oplog.items}
          pagination={oplog.pagination}
          request={tableRequest}
          toolbar={{
            settings: []
          }}
          expandable={{ expandedRowRender }}
          dateFormatter={(value) => {
            return value.format('YYYY-MM-DD HH:mm:ss')
          }}
        />
      </Card>
    </PageContainer>
  )
}

List.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  query: PropTypes.object,
  setUrlQuery: PropTypes.func,
  oplog: PropTypes.object,
  isLoadingOplog: PropTypes.bool,
  getOplog: PropTypes.func
}

export default compose(oplogModule)(List)
