import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';

import styles from '../styles/dashboard.module.scss'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zephyrus | Dashboard</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <div className={styles.main}>
            <div className={styles.tables}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>pudim</td>
                    <td>nos casa</td>
                  </tr>
                </tbody>
              </table>
              <table >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>pudim</td>
                    <td>nos casa</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard
