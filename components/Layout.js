import Head from 'next/head'
import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'Historical Landmarks of San Francisco',
  description:
    'A guide to those officially designated historical landmarks of California that are located in San Francisco, city and county. The state designated its first 78 official landmark in 1932, and the California Historical Landmarks Advistory Committee was created in 1949. Since then, more than a thousand landmarks of historical and cultural value have been designated in California, of which 48 are located in San Francisco County, and presented here.',
}

export default Layout