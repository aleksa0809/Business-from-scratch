import { ErrorBoundary } from 'react-error-boundary'
import Showcase from './Showcase'

function ErrorFallback({error, resetErrorBoundary}) {
  setTimeout(resetErrorBoundary, 5000)
  return (
    <div className="showcase">
      <h2>Something went wrong</h2>
      <p>Be patient, you will be redirected to our top list in a short time...</p>
    </div>
  )
}

export default function(props){
    return (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {window.location = '#/toplist'}}>
            <Showcase {...props} />
          </ErrorBoundary>
    )
}

