import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/nav-bar')({
  component: () => <SpecPage specId="nav-bar" />,
})
