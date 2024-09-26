import React, { useState, useEffect, useCallback } from 'react'
import { List, Avatar, Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'

const InfiniteScrollList = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const loadMoreData = useCallback(() => {
    if (loading) {
      return
    }
    setLoading(true)
    fetch(`https://api.example.com/users?page=${page}&results=10`)
      .then(res => res.json())
      .then(body => {
        setData([...data, ...body.results])
        setPage(page + 1)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [loading, data, page])

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Spin tip="Loading..." />
        }
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.thumbnail} />}
                title={<a href="https://ant.design">{item.name.first} {item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  )
}

export default InfiniteScrollList