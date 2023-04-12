import '@/styles/globals.scss'
import {Provider} from "react-redux";
import store from "@/hooks/redux/store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function App({Component, pageProps}) {
    const queryClietApplication = new QueryClient()
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClietApplication}>
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </Provider>
    )
}
