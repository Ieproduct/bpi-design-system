import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/radio')({
  component: () => <SpecPage specId="radio" />,
})
