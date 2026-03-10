import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/linear-progress')({
  component: () => <SpecPage specId="linear-progress" />,
})
