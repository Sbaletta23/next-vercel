import Link from 'next/link'
import {MainLayouts} from '../../components/layouts/MainLayouts'

export default function Pricing() {
  return (
      <MainLayouts>
        <h1>Pricing page</h1>
        <h1 className={"title"}>
          <Link href={'/'}>Ir a Home</Link>
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/pricing.tsx</code>
        </p>
      </MainLayouts>
  )
}
