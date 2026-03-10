import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/chip')({
  component: () => <SpecPage specId="chip" />,
})
