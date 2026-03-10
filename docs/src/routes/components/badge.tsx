import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/badge')({
  component: () => <SpecPage specId="badge" />,
})
