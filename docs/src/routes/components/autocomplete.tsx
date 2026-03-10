import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/autocomplete')({
  component: () => <SpecPage specId="autocomplete" />,
})
