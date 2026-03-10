import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/text-field')({
  component: () => <SpecPage specId="text-field" />,
})
