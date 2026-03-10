import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/search-bar')({
  component: () => <SpecPage specId="search-bar" />,
})
