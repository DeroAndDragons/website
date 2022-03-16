import React from 'react'
import ReactDOMServer from 'react-dom/server'

const Page = (props) => {
  const { context } = props
  return <html>
    <head>

    </head>
    <body>
      <img src="/static/test.jpg" />
      <div>{JSON.stringify(context)}</div>
    </body>
  </html>
}

export async function onRequest(context) {
  return new Response(
    ReactDOMServer.renderToString(<Page context={context} />),
    { headers: { 'Content-Type': 'text/html' } }
  )
}
