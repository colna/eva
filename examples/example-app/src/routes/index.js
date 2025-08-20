import React from 'react'
// eslint-disable-next-line
import { Route, Switch } from '@kfe/eva'
import Oplog from './Oplog/List'

export default () => (
  <Switch>
    <Route path="/oplog" component={Oplog} />
  </Switch>
)
