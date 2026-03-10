import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/navbar-component')({
  component: () => <SpecPage specId="navbar" />,
})
