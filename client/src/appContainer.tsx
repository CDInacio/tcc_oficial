import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const client = new QueryClient();

export function AppContainer() {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
}
