import Link from 'next/link'
import {MainLayouts} from '../components/layouts/MainLayouts'

export default function Home() {
  return (
      <MainLayouts>
        <h1>Home page</h1>
        <h1 className={"title"}>
          <Link href={'/about'}>Ir a About</Link>
        </h1>

        <p className={"description"}>
          Get started by editing.{' '}
          <code className={"code"}>pages/index.tsx</code>
        </p>
      </MainLayouts>
  )
}
