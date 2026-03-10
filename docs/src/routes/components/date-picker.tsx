import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/date-picker')({
  component: () => <SpecPage specId="date-picker" />,
})
