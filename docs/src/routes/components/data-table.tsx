import { createFileRoute } from '@tanstack/react-router'
import { ComponentPage } from '~/components/ComponentPage'

export const Route = createFileRoute('/components/data-table')({
  component: () => <ComponentPage componentId="data-table" />,
})
