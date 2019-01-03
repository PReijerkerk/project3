// this is imported from the same file as the folder, the reason 
// is that if we need to enhance this component at all we injecting 
// something or connecting it to Redux can be done here instead of in 
// the component file itself. Makes it easier to test being outside the 
// connected or injected component version.

import ErrorBoundary from "./ErrorBoundary"

export default ErrorBoundary