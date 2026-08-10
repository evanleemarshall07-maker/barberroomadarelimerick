import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Almanac — Operations intelligence for field teams',
      },
      {
        name: 'description',
        content:
          'Almanac turns dispatch chatter, route data, and crew notes into decisions your ops team can act on before the shift starts.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
