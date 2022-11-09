import {MainLayouts} from '../../components/layouts/MainLayouts'
import Link from 'next/link'


export default function Conact() {
  return (
    <MainLayouts>
    <h1>About page</h1>
    <h1 className={"title"}>
      <Link href={'/'}>Ir a home</Link>
    </h1>

    <p className={"description"}>
      Get started by editing{' '}
      <code className={"code"}>pages/about.tsx</code>
    </p>
  </MainLayouts>
  )
}
