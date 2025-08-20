import React, { useState } from 'react'
import ReactJson from 'react-json-view'
import PropTypes from 'prop-types'
import { Switch, Typography } from 'antd'

const PrettierJSON = ({ stringifyData }) => {
  const [showPrettier, setShowPrettier] = useState(true)
  return (
    <>
      <Switch
        checked={showPrettier}
        onChange={checked => setShowPrettier(checked)}
        checkedChildren="美化"
        unCheckedChildren="美化"
      />
      {showPrettier ? (
        <ReactJson src={JSON.parse(stringifyData || {})} />
      ) : (
        <Typography.Paragraph copyable>{stringifyData}</Typography.Paragraph>
      )}
    </>
  )
}

PrettierJSON.propTypes = {
  title: PropTypes.string,
  stringifyData: PropTypes.string
}

export default PrettierJSON
