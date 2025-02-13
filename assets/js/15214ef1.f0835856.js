"use strict";(self.webpackChunkapi_docs_generator=self.webpackChunkapi_docs_generator||[]).push([[940],{2701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"tech/sdk","title":"Web3 SDK","description":"Harbour does all the heavy lifting, such as performing identity verification on customers, authenticating them, and","source":"@site/docs/tech/sdk.md","sourceDirName":"tech","slug":"/tech/sdk","permalink":"/docs/tech/sdk","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Distribution Partners","permalink":"/docs/tech/partners"},"next":{"title":"Web Integration","permalink":"/docs/tech/web"}}');var s=t(4848),a=t(8453);const r={},o="Web3 SDK",c={},h=[{value:"API versioning",id:"api-versioning",level:2},{value:"Conventions",id:"conventions",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Anonymous endpoints",id:"anonymous-endpoints",level:2},{value:"Onboarding",id:"onboarding",level:2},{value:"Whitelisting and ramping",id:"whitelisting-and-ramping",level:2},{value:"Signing specification",id:"signing-specification",level:2},{value:"Sample code",id:"sample-code",level:3},{value:"Whitelist signature",id:"whitelist-signature",level:3},{value:"Understanding signing keys",id:"understanding-signing-keys",level:3},{value:"SDK usage and examples",id:"sdk-usage-and-examples",level:2},{value:"5 minute integration challenge",id:"5-minute-integration-challenge",level:3},{value:"Ethereum personal message signing",id:"ethereum-personal-message-signing",level:3},{value:"Test user",id:"test-user",level:3},{value:"Next Steps",id:"next-steps",level:3},{value:"Other programming languages",id:"other-programming-languages",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"web3-sdk",children:"Web3 SDK"})}),"\n",(0,s.jsxs)(n.p,{children:["Harbour does all the heavy lifting, such as performing identity verification on customers, authenticating them, and\ncreating the necessary bank accounts. Integrating apps simply have to deal with basic information retrieval for\nrendering their UI, and taking care of signatures. See how to perform a\n",(0,s.jsx)(n.a,{href:"#5-minute-integration-challenge",children:"basic integration"})," with Harbour ",(0,s.jsx)(n.strong,{children:"in under 5 minutes"}),", using the Harbour SDK."]}),"\n",(0,s.jsxs)(n.p,{children:["Our SDK is written in TypeScript, but sources can be generated for any language that supports\n",(0,s.jsx)(n.a,{href:"https://buf.build/docs/",children:"buf"}),". Buf Connect is a client-server protocol that allows communication over http(s) via\neither JSON- or binary-encoded ",(0,s.jsx)(n.a,{href:"https://protobuf.dev/",children:"protobuf"})," messages."]}),"\n",(0,s.jsx)(n.p,{children:"Unlike a REST API, all calls happen through an http post strictly adhering to a type-safe contract definition."}),"\n",(0,s.jsxs)(n.p,{children:["Our ",(0,s.jsx)(n.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/proto/ramp/v1/public.proto",children:"protobuf definitions"})," clearly\nexpose all invokable methods (a.k.a. RPC: remote procedure call) and their expected input and output types and serve as\nliving documentation of the API."]}),"\n",(0,s.jsx)(n.p,{children:"Here's a simple example you can try yourself on the command line with an anonymous endpoint:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{"fiatAssetId": "CURRENCY_ID_EUR"}\' https://api.harborapp.link/ramp.v1.RampService/GetAssets\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "cryptoAssets": [\n    {\n      "status": {},\n      "protocol": "PROTOCOL_ETHEREUM",\n      "network": "NETWORK_ETHEREUM_MAINNET",\n      "assetId": "ASSET_ID_USDC",\n      "shortName": "USDC",\n      "symbol": "USDC",\n      "ethereumErc20Token": {\n        "tokenAddress": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"\n      },\n      "onrampLimits": {\n        ...\n      },\n      "offrampLimits": {\n        ...\n      }\n    },\n    ...\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The advantage of protobuf is that developers don't need to know the specifics of the protocol, or how messages are\nserialized, and simply interact with function calls on the generated sources."}),"\n",(0,s.jsxs)(n.p,{children:["Check the list of ",(0,s.jsx)(n.a,{href:"/docs/countries-payments",children:"supported countries"})," to meet the eligibility criteria of your customers."]}),"\n",(0,s.jsx)(n.h2,{id:"api-versioning",children:"API versioning"}),"\n",(0,s.jsx)(n.p,{children:"Buf messages are backwards and forward compatible as long as no fields are renamed, renumbered or removed.\nWe might introduce slight changes such as adding new fields and new RPCs over time, maintaining compatibility.\nEventually, we'll resort to versioning in case of breaking changes and promptly inform our API clients."}),"\n",(0,s.jsx)(n.h2,{id:"conventions",children:"Conventions"}),"\n",(0,s.jsxs)(n.p,{children:["Numeric amounts are represented as strings of arbitrary precision. The format is the standard floating-point with the\ndot as decimal separator. Eg: ",(0,s.jsx)(n.code,{children:"1100.24"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Harness the power of a crypto native, password-less, wallet-centric authentication."})}),"\n",(0,s.jsxs)(n.p,{children:["Unless specified otherwise, all RPCs require authentication headers, as described in the\n",(0,s.jsx)(n.a,{href:"/docs/authentication",children:"authentication overview"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'Our API is designed to authenticate clients via cryptographic keys, making it suitable for crypto wallets and other\ndecentralized applications. Every API request must contain a set of headers specifying a public key, specifics of the\ndigital signature algorithm use, and a signature of the request payload. Any request with a valid signature is\nconsidered "authenticated", for the given public key.'}),"\n",(0,s.jsx)(n.p,{children:"Harbour associates one or more public keys with a customer's identity, with a customer being uniquely identified with\ntheir full name, date of birth and residential address, and further authenticated via SMS OTPs."}),"\n",(0,s.jsx)(n.p,{children:"Once a customer is onboarded, the public key is associated with them, and they can start accessing the ramp\nfunctionality. Multiple keys can be associated with the same customer, via a special sign in confirmation procedure."}),"\n",(0,s.jsx)(n.p,{children:"This allows for a crypto wallet to seamlessly interact with the Harbour API without having to store any sensitive\ninformation, nor API keys, nor asking user passwords. All it needs to do is sign each request with a key.\nBy deriving the key deterministically from the seed, the end user will be able to access the Harbour API from any\ndevice they install their wallet on, without having to re-authenticate each time."}),"\n",(0,s.jsx)(n.h2,{id:"anonymous-endpoints",children:"Anonymous endpoints"}),"\n",(0,s.jsx)(n.p,{children:"Assets and quotes can be retrieved anonymously. Check out:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"GetAssets"})," RPC for a list of supported assets and blockchains"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"EstimateOnRampFee"})," and ",(0,s.jsx)(n.code,{children:"EstimateOffRampFee"})," RPCs for estimating the fees and the expected amounts when buying or\nselling crypto"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note that the processing fee is always in fiat, 50 euro cents in the example below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl \'https://snap.harbour.fi/api/ramp.v1.RampService/EstimateOnRampFee\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"fiatAssetId":"CURRENCY_ID_EUR","cryptoAssetId":"ASSET_ID_USDC","protocol":"PROTOCOL_ETHEREUM","fiatAssetAmount":"100"}\'\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "fiatAssetAmount": "100",\n  "cryptoAssetAmount": "101.77",\n  "exchangeRate": "1.0438",\n  "networkFeeAmount": "2",\n  "processingFeeAmount": "0.5"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note that we only support EUR to crypto and vice versa, so the list of assets represents any asset that can be bought\nwith EUR or sold for EUR. As we add support for further fiat currencies, we will provide more details on fiat assets\navailable for customers, depending on their region."}),"\n",(0,s.jsx)(n.p,{children:"There is no endpoint specifying the payment method, as we only support bank payments, so that's implicit as well."}),"\n",(0,s.jsx)(n.p,{children:"The fee estimation endpoints quote the current exchange rate between fiat and crypto, a service charge and the expected\nnetwork fees. The resulting amount of crypto that can be bought with a given fiat amount, or the resulting fiat that can\nbe received for selling a given amount of crypto, is also returned."}),"\n",(0,s.jsx)(n.p,{children:"Note, however, that these are not binding quotes, but simply estimations based on the current fair market value of the\nfiat/crypto pair and the current network congestion. The actual amount is calculated at the moment of payment receipt."}),"\n",(0,s.jsx)(n.h2,{id:"onboarding",children:"Onboarding"}),"\n",(0,s.jsxs)(n.p,{children:["The very first API call that should be done to Harbour is the ",(0,s.jsx)(n.code,{children:"GetAccountInfo"}),'. This is a "smart" RPC that detects\nwhether the authenticated pubkey is already associated with a customer. If so, it returns all information required to\nrender a full UI to the user, in a single response. See below:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl 'https://snap.harbour.fi/api/ramp.v1.RampService/GetAccountInfo' \\\n  -H 'content-type: application/json' \\\n  --data-raw '{}'\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'{\n  "account": {\n    "wallets": [...],\n    "onrampIban": {\n      "iban": "NL39MODR0004495012"\n    },\n    "offrampIban": {\n      "iban": "LT213250070000973519"\n    },\n    "accountHolder": "Martin Bechtle",\n    "cryptoAssets": [...],\n    "limits": {\n      "onrampSingleLimit": "2000",\n      "onrampDailyLimit": "2000",\n      "onrampCurrentDailyUsage": "0",\n      "offrampSingleLimit": "2000",\n      "offrampDailyLimit": "2000",\n      "offrampCurrentDailyUsage": "0"\n    },\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Based on this response, the integrating app can show the customer their magic bank account number, the list of supported\nassets, their limits expressed in EUR (will expand the API to explicitly state the fiat currency once we support more\nthan one), and a list of whitelisted addresses they can ramp from / into."}),"\n",(0,s.jsx)(n.p,{children:"However, should the pubkey be unknown to Harbour, the response will show an onboarding URL, such as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'{\n  "authentication": {\n    "authenticationUrl": "https://example.com/authenticate",\n    "expires_in_sec": 3600\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The integrating app should either redirect or embed an iframe with the above URL, where our web app will take care of\nonboarding the user. Based on their phone number and personal information, Harbour will detect whether it's an existing\ncustomer with a new pubkey, or a completely new customer, and navigate them accordingly to either sign in up and going\nthrough identity verification, or just signing in. Either way, at the end of the process, the pub key will be associated\nwith the customer, and from that moment onwards the ",(0,s.jsx)(n.code,{children:"GetAccountInfo"})," RPC will return the full account info."]}),"\n",(0,s.jsx)(n.p,{children:"Note that sign up is a semi-automated process, and sometimes we need to manually verify a customer's identity, so their\naccount might not be ready for a few minutes to a few hours. In that case, this RPC will still return an onboarding URL.\nOur onboarding web app will detect the customer status and inform them about their progress in the onboarding process."}),"\n",(0,s.jsx)(n.h2,{id:"whitelisting-and-ramping",children:"Whitelisting and ramping"}),"\n",(0,s.jsx)(n.p,{children:"At present, Harbour customers can only ramp in a closed loop, meaning:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"they can only send and receive fiat payments from bank accounts in their own name"}),"\n",(0,s.jsx)(n.li,{children:"they can only send and receive crypto payments from wallets they own"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Any payment sent from a bank account with a different account holder will immediately bounce back.\nAny payment sent from Harbour to the user will explicitly state the user's full name as the beneficiary.\nHarbour will only send crypto to whitelisted addresses, and will only recognise user crypto payments from whitelisted\naddresses."}),"\n",(0,s.jsxs)(n.p,{children:["Note how the ",(0,s.jsx)(n.code,{children:"GetAccountInfo"})," RPC returns a list of wallets. These are the on-chain addresses whitelisted so far.\nWhen pushing a user through a ramp journey, whether that's buying or selling, the client app needs to ensure that the\naddress the user intends to receive crypto on, or send crypto from, is whitelisted, specifically for the given protocol\n(blockchain)."]}),"\n",(0,s.jsxs)(n.p,{children:["In our API, a protocol uniquely identifies a blockchain, see the ",(0,s.jsx)(n.a,{href:"/docs/tech/networks",children:"networks"})," page for more information."]}),"\n",(0,s.jsxs)(n.p,{children:["Once a user chooses which account in the HDWallet to use, and the network, the client can check whether the\n(network, address) is already whitelisted, if not invoke the ",(0,s.jsx)(n.code,{children:"WhitelistAddress"})," RPC. Our code samples provide a clear\nexample on how to do so, but it's quite trivial: the RPC expects a signature field, which is built simply by signing\nthe address (in hex format) with the private key associated with the address public key."]}),"\n",(0,s.jsx)(n.p,{children:"Finally, when selling crypto, the user needs to specify the bank account they want to receive the fiat payment on.\nOnce Harbour receives the crypto, it will send fiat from the user's magic bank account, to the destination (offramp)\nbank account."}),"\n",(0,s.jsxs)(n.p,{children:["The offramp bank account can be saved with the ",(0,s.jsx)(n.code,{children:"SetBankAccount"})," RPC, and from that moment onwards will appear in the\n",(0,s.jsx)(n.code,{children:"GetAccountInfo"}),". The user should be able to change it anytime through the client UI. It is important to implement\nerror handling on the RPC response, as we'll verify whether the account coordinates are valid before saving them."]}),"\n",(0,s.jsx)(n.p,{children:"Example of an unsuccessful request/response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl 'https://snap.harbour.fi/api/ramp.v1.RampService/SetBankAccount' \\\n  -H 'content-type: application/json' \\\n  --data-raw '{\"iban\":{\"iban\":\"LT2132500700973519\"}}'\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "errors": [\n    "ERROR_BANK_NUMBER_INVALID"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note that for now we only support EUR, so the bank coordinate is in the form of an IBAN. As we add support for more\nfiat currencies, such as GBP, the client app will have to implement different forms for different countries."}),"\n",(0,s.jsx)(n.h2,{id:"signing-specification",children:"Signing specification"}),"\n",(0,s.jsx)(n.p,{children:"Harbour allows client apps to use cryptographic primitives that are native to their ecosystem. When signing a request\npayload, there's a bunch of different options available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"EVM: sign a keccak256 digest of the request body with a secp256k1 signature"}),"\n",(0,s.jsx)(n.li,{children:"Cosmos: sign a sha256 digest of the request body with a secp256k1 signature"}),"\n",(0,s.jsx)(n.li,{children:"Substrate: sign a blake2 digest of the request body with a sr25519 signature"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Supported hashing algorithms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"keccak256"}),"\n",(0,s.jsx)(n.li,{children:"sha256"}),"\n",(0,s.jsx)(n.li,{children:"blake2b256"}),"\n",(0,s.jsxs)(n.li,{children:["ethereum (like keccak256, but adding prefix ",(0,s.jsx)(n.code,{children:"\\x19Ethereum Signed Message:{length}"})," before hashing)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Supported signing algorithms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"secp256k1"}),"\n",(0,s.jsx)(n.li,{children:"sr25519"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Supported encodings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"hex"}),"\n",(0,s.jsx)(n.li,{children:"base64"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All the client app needs to do is specify the following http headers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"X-Encoding"}),": specifies which encoding to use for all headers containing binary data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"X-Signature-Type"}),": hasing_algo/signing_algo, eg ",(0,s.jsx)(n.code,{children:"keccak256/secp256k1"})," for Ethereum"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"X-Signature"}),": the signature"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"X-Signature-PublicKey"}),": the public key"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"X-Signature-Timestamp"}),": a timestamp to be used as nonce"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note: the timestamp has to be the Unix epoch milliseconds, and has to be within 1 minute of the server time.\nThis implies that a client device with a skewed clock won't be able to authenticate successfully."}),"\n",(0,s.jsx)(n.p,{children:"And, by the way, header management is abstracted away by our SDK, should you decide to use it."}),"\n",(0,s.jsx)(n.p,{children:"The signature is produced by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"converting the timestamp to its string representation and taking the resulting Unicode bytes"}),"\n",(0,s.jsx)(n.li,{children:"concatenating the request body bytes with the timestamp Unicode bytes"}),"\n",(0,s.jsx)(n.li,{children:"hashing with the specified hashing algorithm"}),"\n",(0,s.jsx)(n.li,{children:"signing with the specified public key and signing algorithm"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sample-code",children:"Sample code"}),"\n",(0,s.jsxs)(n.p,{children:["This can be a quite complex task, but fortunately you can take the TypeScript code from our own examples.\nCheck the following example for Ethereum, which uses a key already associated with a test Harbour customer in our dev\nenvironment:\n",(0,s.jsx)(n.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-eth-linked.ts",children:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-eth-linked.ts"})]}),"\n",(0,s.jsx)(n.p,{children:"If you clone our SDK repo, you can even run the example with Node.js:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone github.com/harbour-tech/harbour-ts-sdk\nnpm i\nnpx tsx src/examples/example-eth-linked.ts\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will see an actual API response from our servers with the fake account information."}),"\n",(0,s.jsxs)(n.p,{children:["There's also a code sample for a key which is not yet associated with a Harbour customer:\n",(0,s.jsx)(n.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-eth-unlinked.ts",children:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-eth-unlinked.ts"}),"\nIn here you'll appreciate the redirect to the authentication URL."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to ensure the correctness of your implementation, we strongly recommend implementing a test case for your\nsigning logic. In the example above, you'll notice a ",(0,s.jsx)(n.code,{children:"signPayload"})," function invocation that signs ",(0,s.jsx)(n.code,{children:"{}123"})," with a\ncertain key."]}),"\n",(0,s.jsx)(n.h3,{id:"whitelist-signature",children:"Whitelist signature"}),"\n",(0,s.jsx)(n.p,{children:"Harbour requires customers to whitelist their on-chain addresses before they can ramp in or out of it.\nWhitelisting requires producing a signature with the address' private key, to demonstrate ownership of the address.\nOwnership is a fundamental requirement for customers using our services."}),"\n",(0,s.jsx)(n.p,{children:"The signature is produced by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Taking the address's on-chain string representation, e.g. ",(0,s.jsx)(n.code,{children:"0x1234567890abcdef"})," on Ethereum"]}),"\n",(0,s.jsx)(n.li,{children:"Signing such payload with the exact same signing function used to authenticate requests, using the private key\nassociated with the address"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Check out TypeScript sample code for"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-eth-linked.ts",children:"Ethereum"})}),"\n",(0,s.jsx)(n.li,{children:"Examples available on request for other chains"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"understanding-signing-keys",children:"Understanding signing keys"}),"\n",(0,s.jsx)(n.p,{children:"So far we discussed producing signatures for two different use cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"authenticating requests"}),"\n",(0,s.jsx)(n.li,{children:"whitelisting addresses"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For authenticating request, you'll want to choose a key which is derived from the user's seed phrase. As long as the key\nis deterministically derived, as user can install their wallet on multiple devices and not have to go through the\nprocess of linking a new key to their account each time."}),"\n",(0,s.jsxs)(n.p,{children:["An example of a deterministic derivation would be simply taking the first key in the HDWallet derived from the seed\nphrase (e.g. ",(0,s.jsx)(n.code,{children:"m/44'/60'/0'/0/0"})," for Ethereum)."]}),"\n",(0,s.jsx)(n.p,{children:"On the other hand, for whitelisting addresses, you'll want to use the key associated with the address."}),"\n",(0,s.jsx)(n.p,{children:"Another important aspect is the ability to access the private key used for signing requests transparently for the user,\nwithout having to bother them every time with a signing pop up."}),"\n",(0,s.jsx)(n.h2,{id:"sdk-usage-and-examples",children:"SDK usage and examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone github.com/harbour-tech/harbour-ts-sdk\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy ",(0,s.jsx)(n.code,{children:"src/index.ts"})," and ",(0,s.jsx)(n.code,{children:"src/gen/**"})," into your project"]}),"\n",(0,s.jsxs)(n.li,{children:["Check the Ethereum examples for either\na ",(0,s.jsx)(n.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-eth-unlinked.ts",children:"new customer"})," or\nan ",(0,s.jsx)(n.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-eth-linked.ts",children:"existing one"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Dev API: ",(0,s.jsx)(n.a,{href:"https://dev-api.harborapps-nonprod.link",children:"https://dev-api.harborapps-nonprod.link"}),"\nProd API: ",(0,s.jsx)(n.a,{href:"https://api.harborapp.link",children:"https://api.harborapp.link"})]}),"\n",(0,s.jsx)(n.p,{children:"Our SDK has typescript classes for all API requests and responses, plus a client which takes parameters"}),"\n",(0,s.jsx)(n.h3,{id:"5-minute-integration-challenge",children:"5 minute integration challenge"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Let's integrate your crypto wallet with the TypeScript SDK in just 5 minutes with less than 50 lines of code!"})}),"\n",(0,s.jsxs)(n.p,{children:["Please note that all examples are based on version ",(0,s.jsx)(n.code,{children:"6.x"})," of ",(0,s.jsx)(n.code,{children:"ethers"}),", which might slightly differ from ",(0,s.jsx)(n.code,{children:"5.x"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We'll try producing a valid signature and invoking our ",(0,s.jsx)(n.code,{children:"GetAccountInfo"})," API with an Ethereum key.\nLet's use hex encoding and keccak256/secp256k1 for the signature."]}),"\n",(0,s.jsxs)(n.p,{children:["Step 1: implement the signing function as per ",(0,s.jsx)(n.a,{href:"#signing-specification",children:"spec"}),".\nHere's a simple example using an ",(0,s.jsx)(n.code,{children:"ethers"})," wallet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import {keccak256, toUtf8Bytes, Wallet} from \'ethers\';\nimport crypto from \'crypto\';\nimport {EthereumSignature, RampClient, Signature} from "../index";\nimport {GetAccountInfoRequest} from "../gen/ramp/v1/public_pb";\n\n// generate a random wallet, or use your own HDWallet\nconst privateKey = "0x" + crypto.randomBytes(32).toString(\'hex\');\nconst wallet = new Wallet(privateKey);\n\n// Our SDK already constructs the required payload by concatenating the request body with the current timestamp.\n// Eg: {"foo":"bar"}1234567890.\n// You just need to implement a simple signing function such as this one.\nconst signPayload = (payload: string): string => {\n  const hashed = keccak256(toUtf8Bytes(payload));\n  return wallet.signingKey.sign(hashed).serialized;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Step 2: instantiate the RampClient from our SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const ramp = new RampClient(\n  "https://dev-api.harborapps-nonprod.link",\n  (payload): Promise<Signature> => {\n    const sig = signPayload(payload);\n    return Promise.resolve({\n      signature: sig,\n      publicKey: wallet.signingKey.publicKey,\n      ...EthereumSignature, // this specifies the correct hashing and signing headers\n    });\n  },\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Step 3: get account info"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const accountInfo = await ramp.getAccountInfo(new GetAccountInfoRequest())\nconsole.log("Account Info: ");\nconsole.log(accountInfo);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Done. At this point, you should expect an output with the onboarding URL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Account Info: \nGetAccountInfoResponse {\n  result: {\n    case: 'authentication',\n    value: GetAccountInfoResponse_Authentication {\n      authenticationUrl: 'https://dev-onboarding.harborapps-nonprod.link?token=eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoX3N2YyIsInN1YiI6ImRldmljZSIsImV4cCI6MTczMjQ2MTcxMCwiaWF0IjoxNzMyNDUwODgwLCJ1c2VyX2lkIjoiIiwiZGV2aWNlX2lkIjoiMzYwZDU1YzgtZjVkYS00Zjk2LTlkNTctOTRlNjUxMjA4YjdkIiwidXNlcl9zdGF0dXMiOiIifQ.ANNlt5YJPKZwowaWrE93dsycGH-5IW4BCTpMW0UZzhUiZiK80bOJq5_qisBvTpp16WQw_P5DS9H_FaJQ-8aJxKM4AYsc_u8M2Rco3O3WAd3BpMpIhyh1BilxUBXGiKQqg2CDEQWWMiHlnwEs7t2WgCr2rcDjVRjL5EgTnEQZ9SYyT2pr',\n      expiresInSec: 10800n\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ethereum-personal-message-signing",children:"Ethereum personal message signing"}),"\n",(0,s.jsxs)(n.p,{children:["Note that Ethereum wallets typically support raw signing and personal message signing. Depending on which operation\nyou decide to use, you might need to tweak the RampClient instantiation. To be clear, raw message signing is simply\nsigning the keccak hash, whereas personal message signing is signing the keccak hash of the message prefixed with\n",(0,s.jsx)(n.code,{children:'"\\x19Ethereum Signed Message:\\n{msg_length}"'}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Following is an example working with personal message signing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import {Wallet} from \'ethers\';\nimport crypto from \'crypto\';\nimport {EthPersonalSignature, RampClient, Signature} from "../index";\nimport {GetAccountInfoRequest} from "../gen/ramp/v1/public_pb";\n\n// generate a random wallet, or use your own HDWallet\nconst privateKey = "0x" + crypto.randomBytes(32).toString(\'hex\');\nconst wallet = new Wallet(privateKey);\n\n// Our SDK already constructs the required payload by concatenating the request body with the current timestamp.\n// Eg: {"foo":"bar"}1234567890.\n// You just need to implement a simple signing function such as this one.\nconst signPayload = (payload: string): string => {\n  return wallet.signMessageSync(payload);\n}\n\nconst ramp = new RampClient(\n  "https://dev-api.harborapps-nonprod.link",\n  (payload): Promise<Signature> => {\n    const sig = signPayload(payload);\n    return Promise.resolve({\n      signature: sig,\n      publicKey: wallet.signingKey.publicKey,\n      ...EthPersonalSignature, // this specifies the correct hashing and signing headers for personal msg signing\n    });\n  },\n);\n\nconst accountInfo = await ramp.getAccountInfo(new GetAccountInfoRequest())\nconsole.log("Account Info: ");\nconsole.log(accountInfo);\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"test-user",children:"Test user"}),"\n",(0,s.jsxs)(n.p,{children:["Once you manage to get a pub key working against our dev API, it's probably best to store the private key somewhere to\nfacilitate integration work. You can create a test user by following the onboarding URL and select Germany as a country.\nInsert number: ",(0,s.jsx)(n.code,{children:"+49 7777908100"})," and confirm with OTP ",(0,s.jsx)(n.code,{children:"908100"}),". Finally, answer the security questions with ",(0,s.jsx)(n.code,{children:"90147"})," as\npost code and ",(0,s.jsx)(n.code,{children:"01/01/1989"})," as date of birth."]}),"\n",(0,s.jsx)(n.p,{children:"Your pub key is now associated with a test user, and you can interact with all the RPCs to get account info, set the\nofframp bank account, whitelist addresses, etc."}),"\n",(0,s.jsx)(n.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Whitelisting."})," Check out\nour ",(0,s.jsx)(n.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-eth-linked.ts",children:"Ethereum sample code"}),"\nand the ",(0,s.jsx)(n.a,{href:"#whitelist-signature",children:"whitelist signature"})," paragraph for a step-by-step guide"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"UI implementation."})," Check our ",(0,s.jsx)(n.a,{href:"/docs/tech/ui",children:"UI implementation guide"})," for a step-by-step guide on\nhow to map data fields and actions to your own UI. Want a quick preview to get an idea? Check out our own implementation\nwhich uses a MetaMask snap to sign messages and interact with the Harbour API. The official URL\nis ",(0,s.jsx)(n.a,{href:"https://snap.harbour.fi",children:"https://snap.harbour.fi"}),", although it will be more practical to head over to ",(0,s.jsx)(n.a,{href:"https://dev-snap.harborapps-nonprod.link",children:"https://dev-snap.harborapps-nonprod.link"}),"\nand sign in as the ",(0,s.jsx)(n.a,{href:"#test-user",children:"test user"}),". You can then interact with the UI and check out your browser console for all\nnetwork interactions"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Asset status and limits."})," Check out the ",(0,s.jsx)(n.a,{href:"/docs/tech/ui#ramp-status",children:"Ramp Status"}),"\nand ",(0,s.jsx)(n.a,{href:"/docs/tech/ui#account-limits",children:"Account Limits"})," paragraphs in our UI integration guide."]}),"\n",(0,s.jsx)(n.h2,{id:"other-programming-languages",children:"Other programming languages"}),"\n",(0,s.jsx)(n.p,{children:"While the RPC request/response objects can easily be generated for other languages, our TypeScript SDK also takes care\nof injecting signatures and other headers in the requests. Our team will be happy to publish SDKs for other languages\nas soon as a concrete need arises from a client, so do not hesitate to get in touch."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);