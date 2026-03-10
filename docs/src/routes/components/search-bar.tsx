import { createFileRoute } from '@tanstack/react-router'
import { ComponentPage } from '~/components/ComponentPage'

export const Route = createFileRoute('/components/search-bar')({
  component: () => <ComponentPage componentId="search-bar" />,
})
