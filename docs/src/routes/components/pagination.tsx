import { createFileRoute } from '@tanstack/react-router'
import { ComponentPage } from '~/components/ComponentPage'

export const Route = createFileRoute('/components/pagination')({
  component: () => <ComponentPage componentId="pagination" />,
})
