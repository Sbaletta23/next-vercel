import Link from 'next/link'
import {MainLayouts} from '../components/layouts/MainLayouts'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { JsxAttribute } from 'typescript'

export default function About() {
  return (
    <>
    <h1>About page</h1>
    <h1 className={"title"}>
      <Link href={'/'}>Ir a home</Link>
    </h1>

    <p className={"description"}>
      Get started by editing{' '}
      <code className={"code"}>pages/about.tsx</code>
    </p>
  </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayouts>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayouts>
  )
}