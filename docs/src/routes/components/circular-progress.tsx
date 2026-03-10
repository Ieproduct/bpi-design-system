import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/circular-progress')({
  component: () => <SpecPage specId="circular-progress" />,
})
