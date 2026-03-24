import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/app-bar')({
  component: () => <SpecPage specId="app-bar" />,
})
