import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'x-rapidapi-host': 'investing-cryptocurrency-markets.p.rapidapi.com',
    'x-rapidapi-key': 'd15d030ffcmshf0570c1ca770d27p1c3403jsn974709c37850'
}
const baseUrl ='https://investing-cryptocurrency-markets.p.rapidapi.com'

const createRequest=(url)=>({
    url,headers:cryptoApiHeaders
})


export const cryptoApi=createApi({
   reducerPath:'cryptoApi',
   baseQuery:fetchBaseQuery({baseUrl}),
   endpoints:(builder)=>({
       getCryptos:builder.query({
           query:(count)=>createRequest(`/coins/list`),
       }),
    //    getExchanges:builder.query({
    //        query:()=>createRequest(`/exchanges`),
    //    }),
    //    getCryptoDetails:builder.query({
    //        query:(coinId)=>createRequest(`/coin/${coinId}`),
    //    }),
    //    getCryptoHistory:builder.query({
    //        query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history/${timePeriod}`),
    //    }),
   })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;