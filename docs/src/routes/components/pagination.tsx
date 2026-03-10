import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/pagination')({
  component: () => <SpecPage specId="pagination" />,
})
