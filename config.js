import React from "react";
import { Anchor } from "ual-anchor";
import { Wax } from "@eosdacio/ual-wax";
import { Wombat } from "ual-wombat";
import waxdao_ad from "./waxdao_ad.png";
import { useGetBannerAds } from "../components/CustomHooks/useGetBannerAds";

//const [bannerAds, getBannerAds] = useGetBannerAds();

export const mainnetWebsiteURL = "https://waxdao.io";

export const testnetWebsiteURL = "https://test.waxdao.io";

export const localWebsiteURL = "http://localhost:3000";

//export const localServerURL = "http://127.0.0.1:3001";

export const localServerURL = "http://localhost:5000";

export const localServerHttps = "https://10.0.0.250:3001";

export const adminServerURL = "http://localhost:5001";

export const getBlogPostEndpoint = "get-blog";

export const getAllBlogsEndpoint = "get-all-blogs";

export const removeBlogEndpoint = "remove-blog";

export const editBlogEndpoint = "edit-blog";

export const blogImagePath = "https://mikedcrypto.com/img/waxdao";

export const getStatsEndpoint = "get-stats";

export const tokenServerURL = "https://api.waxdao.io";
export const getAllTokensEndpoint = "get-all-tokens";
export const getTokenEndpoint = "get-token";
export const addTokenEndpoint = "add-token";
export const loginEndpoint = "login";
export const addUserEndpoint = "add-user";

export const testnetChain = {
  chainId: "f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12",
  rpcEndpoints: [
    {
      protocol: "https",
      host: "testnet.waxsweden.org",
      port: "443",
    },
  ],
};

export const mainnetChain = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [
    {
      protocol: "https",
      host: "wax.pink.gg",
      port: "443",
    },
  ],
};

export const apiList = [
  "https://waxtest.api.eosnation.io",
  "https://waxtest.api.eosnation.io",
  "https://waxtest.api.eosnation.io",
];

export const atomicApiList = [
  "https://test.wax.api.atomicassets.io",
  "https://test.wax.api.atomicassets.io",
];

export const hyperionApiList = [
  "https://wax.blokcrafters.io",
  "https://api.waxsweden.org",
];

export const mainnetApiList = [
  "https://wax.pink.gg",
  "https://wax.api.eosnation.io",
];

export const mainnetAtomicApiList = [
  "https://wax.api.atomicassets.io",
];

export const mainnetAtomicHubLink = "https://wax.atomichub.io";

export const testnetAtomicHubLink = "https://wax-test.atomichub.io";

// THE CURRENT CONFIG RIGHT NOW

export const currentWebsiteURL = mainnetWebsiteURL;
const currentConfig = "mainnet";
export const currentUsername = localStorage.getItem('waxAccount');
export const currentWalletProvider = localStorage.getItem("walletProvider");

var thisChain;
var thisApiList;
var thisAtomicApiList;
var thisAtomicHubLink;

if (currentConfig == "mainnet") {
  thisChain = mainnetChain;
  thisApiList = mainnetApiList;
  thisAtomicApiList = mainnetAtomicApiList;
  thisAtomicHubLink = mainnetAtomicHubLink;
} else if (currentConfig == "testnet") {
  thisChain = testnetChain;
  thisApiList = apiList;
  thisAtomicApiList = atomicApiList;
  thisAtomicHubLink = testnetAtomicHubLink;
}

export const floorPriceApiProvider = "https://atomicassets.ledgerwise.io";

export const adminMode = false;

export const myChain = thisChain;

export const currentApiList = thisApiList;

export const currentAtomicApiList = thisAtomicApiList;

export const currentHyperionApiList = hyperionApiList;

export const currentAtomicHubLink = thisAtomicHubLink;

export const currentAdBanner = waxdao_ad;

export const currentIpfsEndpoint = "https://ipfs.io/ipfs";

export const getCurrentAtomicApiList =
  currentAtomicApiList[Math.floor(Math.random() * 3)];

export const getCurrentApiList =
  currentApiList[Math.floor(Math.random() * (3 - 0)) + 0];

export const getApiListByIndex = (index) => {
  return currentApiList[index];
};

//END OF THIS CURRENT CONFIG

export const anchor = new Anchor([myChain], {
  appName: "WaxDAO",
});

export const wax = new Wax([myChain], {
  appName: "WaxDAO",
});

export const wombat = new Wombat([myChain], {
  appName: "WaxDAO",
});
