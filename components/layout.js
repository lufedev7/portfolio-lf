import Navbar from './navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import nProgress from 'nprogress'
import NProgress from 'nprogress'
import classNames from 'classnames'
const Layout = ({ children, footer = true, dark = false }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url)
      NProgress.start()
    }
    router.events.on('routeChangeStart', handleRouteChange)

    router.events.on('routeChangeComplete', () => NProgress.done())

    router.events.on('routeChangeError', () => nProgress.done())

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  return (
    <div className={classNames({ 'bg-dark': dark })}>
      <Navbar />
      <main className='container py-4'>{children}</main>
      {footer && (
        <footer className='bg-dark text-light text-center'>
          <div className='container p-4'>
            <h3>&copy; Luis Fernando Angarita ruano</h3>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All Rights Reserverd</p>
          </div>
        </footer>
      )}
    </div>
  )
}
export default Layout
