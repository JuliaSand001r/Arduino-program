import { sanitizeUrl } from '@braintree/sanitize-url';


import "../../api/validators/server/methods.js";
import "../../api/validators/server/publications.js";

import "../../api/records/server/methods.js";
import "../../api/records/server/publications.js";

import "../../api/proposals/server/methods.js";
import "../../api/proposals/server/publications.js";

Atractor.methods({
    hexToBech32: function(address, prefix) {
        let addressBuffer = Buffer.from(address, 'hex');
        // let buffer = Buffer.alloc(37)
        // addressBuffer.copy(buffer);
        return bech32.encode(prefix, bech32.toWords(addressBuffer));


const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')
module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/@next/ApiReq/*',

      {
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,

       "paths": {
      "@types": ["./@next/types"],
      "@/components/*": ["components/*"],
      "@styles": ["./styles"],
      "@utils": ["./@next/utils"],
      "test-utils": ["./@next/utils/test.utils.tsx"],
      "@ApiReq": ["./@next/ApiReq"],
      "@hooks": ["./@next/hooks"],

const nextConfig = {
  compiler: {
    emotion: true,
    styledComponents: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io']
  },




    
