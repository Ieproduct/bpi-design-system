import { createFileRoute } from '@tanstack/react-router'
import { SpecPage } from '~/components/SpecPage'

export const Route = createFileRoute('/components/typography')({
  component: () => <SpecPage specId="typography" />,
})
